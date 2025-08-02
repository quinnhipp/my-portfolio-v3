// src/app/page.tsx

"use client";

import React, { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";

// --- Sorting Helper Function ---
const compareNames = (a: string, b: string) => {
  const partsA = a.split(" ");
  const partsB = b.split(" ");

  const lastNameA = partsA.pop() || "";
  const lastNameB = partsB.pop() || "";

  const firstNameA = partsA.join(" ");
  const firstNameB = partsB.join(" ");

  // Compare last names first
  const lastNameComparison = lastNameA.localeCompare(lastNameB);
  if (lastNameComparison !== 0) {
    return lastNameComparison;
  }

  // If last names are the same, compare first names
  return firstNameA.localeCompare(firstNameB);
};

const initialGuestList: string[] = ["Import a seating chart to begin"];
const TOTAL_TABLES = 24;

type SeatingChart = Record<number, string[]>;
type NicknameMap = Record<number, string>;

export default function WeddingPlannerPage() {
  const [masterList, setMasterList] = useState<string[]>(initialGuestList);
  const [tables, setTables] = useState<SeatingChart>({});
  const [activeTable, setActiveTable] = useState<number | null>(1);
  const [isDirty, setIsDirty] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [lockedTables, setLockedTables] = useState<Set<number>>(new Set());
  const [tableNicknames, setTableNicknames] = useState<NicknameMap>({});

  const filteredMasterList = useMemo(
    () =>
      masterList
        .filter((guest) =>
          guest.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort(compareNames), // Also sort the filtered master list
    [masterList, searchTerm]
  );

  const sortedTableNumbers = useMemo(() => {
    const tableNumbers = Array.from({ length: TOTAL_TABLES }, (_, i) => i + 1);
    return tableNumbers.sort((a, b) => {
      const aIsLocked = lockedTables.has(a);
      const bIsLocked = lockedTables.has(b);
      if (aIsLocked && !bIsLocked) return 1;
      if (!aIsLocked && bIsLocked) return -1;
      return a - b;
    });
  }, [lockedTables]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result;
      const workbook = XLSX.read(data, { type: "array" });

      const mainSheet = workbook.Sheets[workbook.SheetNames[0]];
      const loadedGuests: any[] = XLSX.utils.sheet_to_json(mainSheet);
      const newMasterList: string[] = [];
      const newTables: SeatingChart = {};

      for (const guest of loadedGuests) {
        const guestName = guest["Guest Name"];
        const tableNumber = guest["Table Number"];
        if (guestName) {
          if (tableNumber !== -1 && tableNumber != null) {
            if (!newTables[tableNumber]) newTables[tableNumber] = [];
            newTables[tableNumber].push(guestName);
          } else {
            newMasterList.push(guestName);
          }
        }
      }

      for (const tableNum in newTables) {
        newTables[tableNum].sort(compareNames);
      }

      setMasterList(newMasterList.sort(compareNames));
      setTables(newTables);

      if (workbook.SheetNames.includes("Locked Tables")) {
        const lockedSheet = workbook.Sheets["Locked Tables"];
        const lockedData: any[] = XLSX.utils.sheet_to_json(lockedSheet);
        setLockedTables(new Set(lockedData.map((row) => row.LockedTable)));
      } else {
        setLockedTables(new Set());
      }

      if (workbook.SheetNames.includes("Nicknames")) {
        const nicknamesSheet = workbook.Sheets["Nicknames"];
        const nicknameData: any[] = XLSX.utils.sheet_to_json(nicknamesSheet);
        const newNicknames = nicknameData.reduce((acc, row) => {
          if (row.TableNumber != null && row.Nickname != null) {
            acc[row.TableNumber] = row.Nickname;
          }
          return acc;
        }, {} as NicknameMap);
        setTableNicknames(newNicknames);
      } else {
        setTableNicknames({});
      }

      setIsDirty(false);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExport = () => {
    const exportData = Object.entries(tables).flatMap(([tableNumber, guests]) =>
      guests.map((guest) => ({
        "Guest Name": guest,
        "Table Number": parseInt(tableNumber, 10),
      }))
    );
    masterList.forEach((guest) => {
      exportData.push({ "Guest Name": guest, "Table Number": -1 });
    });
    const mainWorksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, mainWorksheet, "Seating Chart");

    if (lockedTables.size > 0) {
      const lockedData = Array.from(lockedTables).map((tableNum) => ({
        LockedTable: tableNum,
      }));
      const lockedWorksheet = XLSX.utils.json_to_sheet(lockedData);
      XLSX.utils.book_append_sheet(workbook, lockedWorksheet, "Locked Tables");
    }

    const nicknameData = Object.entries(tableNicknames)
      .filter(([_, nickname]) => nickname)
      .map(([tableNum, nickname]) => ({
        TableNumber: parseInt(tableNum),
        Nickname: nickname,
      }));

    if (nicknameData.length > 0) {
      const nicknamesWorksheet = XLSX.utils.json_to_sheet(nicknameData);
      XLSX.utils.book_append_sheet(workbook, nicknamesWorksheet, "Nicknames");
    }

    XLSX.writeFile(workbook, "WeddingSeatingChart.xlsx");
    setIsDirty(false);
  };

  const updateNickname = (tableNum: number, nickname: string) => {
    setTableNicknames((prev) => ({
      ...prev,
      [tableNum]: nickname,
    }));
    setIsDirty(true);
  };

  const assignGuest = (guestName: string) => {
    if (activeTable === null || lockedTables.has(activeTable)) return;
    setMasterList((prev) => prev.filter((guest) => guest !== guestName));
    setTables((prev) => {
      const newGuestList = [...(prev[activeTable] || []), guestName];
      newGuestList.sort(compareNames);
      return {
        ...prev,
        [activeTable]: newGuestList,
      };
    });
    setIsDirty(true);
  };

  const unassignGuest = (guestName: string, tableNumber: number) => {
    if (lockedTables.has(tableNumber)) return;
    setTables((prev) => ({
      ...prev,
      [tableNumber]: prev[tableNumber].filter((guest) => guest !== guestName),
    }));
    setMasterList((prev) => [...prev, guestName].sort(compareNames));
    setIsDirty(true);
  };

  const toggleLock = (tableNum: number) => {
    setLockedTables((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tableNum)) {
        newSet.delete(tableNum);
      } else {
        newSet.add(tableNum);
        if (activeTable === tableNum) {
          setActiveTable(null);
        }
      }
      return newSet;
    });
    setIsDirty(true);
  };

  return (
    <main className="flex flex-col md:flex-row font-sans gap-5 p-5 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <div className="w-full md:w-1/4">
        <div className="sticky top-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="file-upload"
              className="w-full inline-block bg-indigo-500 dark:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors"
            >
              📂 Load/Import Layout
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileUpload}
            />
            <button
              onClick={handleExport}
              className="w-full bg-green-500 dark:bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
            >
              💾 Save Layout
            </button>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h2 className="text-xl font-bold text-center mb-2">
              Master List ({filteredMasterList.length}/{masterList.length})
            </h2>
            <input
              type="text"
              placeholder="🔍 Search for a guest..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
            {filteredMasterList.map((guest) => (
              <div
                key={guest}
                onClick={() => assignGuest(guest)}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 transition-colors"
              >
                {guest}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/4">
        <h2 className="text-xl font-bold text-center mb-4">
          Tables (Active:{" "}
          <span className="text-green-600 dark:text-green-400">
            {activeTable ?? "None"}
          </span>
          )
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedTableNumbers.map((tableNum) => {
            const isLocked = lockedTables.has(tableNum);
            return (
              <div
                key={tableNum}
                className={`border rounded-lg p-3 bg-white dark:bg-gray-800 shadow-sm transition-opacity ${
                  isLocked
                    ? "opacity-60 border-blue-400 dark:border-blue-600"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() => toggleLock(tableNum)}
                    className="p-1 text-lg"
                    aria-label={isLocked ? "Unlock table" : "Lock table"}
                  >
                    {isLocked ? "🔒" : "🔓"}
                  </button>
                  <button
                    onClick={() => !isLocked && setActiveTable(tableNum)}
                    disabled={isLocked}
                    className={`w-full mx-2 p-2 border rounded-md text-base font-semibold transition-colors ${
                      activeTable === tableNum && !isLocked
                        ? "bg-green-500 text-white border-green-600"
                        : "bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                    } ${
                      isLocked
                        ? "cursor-not-allowed"
                        : "hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    Table {tableNum} ({tables[tableNum]?.length || 0})
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Add a nickname..."
                  value={tableNicknames[tableNum] || ""}
                  onChange={(e) => updateNickname(tableNum, e.target.value)}
                  disabled={isLocked}
                  className="w-full p-1.5 mb-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-1 focus:ring-indigo-500 outline-none disabled:cursor-not-allowed"
                />

                <div className="flex flex-col gap-2 min-h-[2rem]">
                  {(tables[tableNum] || []).map((guest) => (
                    <div
                      key={guest}
                      onClick={() => unassignGuest(guest, tableNum)}
                      className={`p-2 border rounded-md transition-colors ${
                        isLocked ? "cursor-not-allowed" : "cursor-pointer"
                      } bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-800 dark:text-green-200 border-gray-300 dark:border-gray-600`}
                    >
                      {guest}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
