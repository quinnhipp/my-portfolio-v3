"use client";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import References from "./pages/references";
import WorkExperience from "./pages/workExperience";
import Skills from "./pages/skills";
import Education from "./pages/education";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <WorkExperience />
      <Skills />
      <Education />
      <Projects />
      <References />
    </div>
  );
}
