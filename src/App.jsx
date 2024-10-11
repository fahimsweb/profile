import Contact from "./components/container/Contact";
import Hero from "./components/container/Hero";
import Navbar from "./components/container/Navbar";
import Skills from "./components/container/Skills";

function App() {
  return (
    <>
      {/* Delete this before you start}*/}

      <div className="inset-10 -z-10 h-full w-full items-center [background:radial-gradient(100%_100%_at_50%_20%,#000_40%,#63e_100%)]">
        <main className="item-center lg-px-16 flex flex-col">
          <Navbar />
          <Hero />
          <Skills />
          <Contact />
        </main>
      </div>
      {/* Delete this before you start}*/}
    </>
  );
}

export default App;
