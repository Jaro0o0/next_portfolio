import Header from "./components/Header/Header";
import TechStack from "./components/TechStack/TechStack";
import Portfolio from './components/Portfolio/Portfolio'
import Image from "next/image";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";





function Home() {
  return (
    <>
      {/* HEADER */}
      <Header/>
      {/* SECTION_HERO */}
      <section className="h-screen w-full relative">
        {/* HERO_HEADER */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center ">
          <span>BASED IN POLAND</span>
          <h1 className="text-8xl">Software Enginer</h1>
          <span>HI</span>
        </div>

      </section>
      <TechStack/>
      <Portfolio/>
      <Contact/>
      <About/>
     
    
    </>
  );
}

export default Home;
