import Image from "next/image";
import Home from "./pages/home";
import About from "./pages/about";

export default function Page() {
  return (
    <div className="scrollbar-hide">
      <Home />
      <About />
    </div>
  );
}
