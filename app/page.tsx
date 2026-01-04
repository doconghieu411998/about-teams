import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Main />
      </main>
      <Footer />
    </>
  );
}
