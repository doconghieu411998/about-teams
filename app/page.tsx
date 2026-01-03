import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
