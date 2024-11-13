import Education from "./components/education";
import Heading from "./components/heading";
import Projects from "./components/project/projects";
import Skills from "./components/skills";
import Story from "./components/story";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-[40px]">
      <Heading />
      <Projects />
      <Education />
      <Skills />
    </main>
  );
}
