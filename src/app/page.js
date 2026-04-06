
import TechStack from "./components/TechStack/TechStack";
import Portfolio from './components/Portfolio/Portfolio'
import Image from "next/image";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

//IMPORT BUTTON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCode,faGlobe} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";






function Home() {
  return (
    <>
      {/* HEADER */}
     
      {/* SECTION_HERO */}
      <section className="h-screen w-full relative bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        {/* HERO_HEADER */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center flex flex-col gap-5 ">
          <span className="text-[#1771BF]">BASED IN POLAND</span>
          <h1 className="text-8xl">Software Enginer</h1>
          <span>HI</span>
          {/* BUTTONS_BOX */}
          <div className="flex gap-2 justify-center">
              {/* BBUTTON */}
              <div className="bg-white py-3 px-6 rounded-md flex gap-2 w-30">
                  <Link href='#' >Work</Link>
                  <FontAwesomeIcon icon={faGlobe} className="h-6 w-6"  />
              </div>
               {/* BBUTTON */}
              <div className=" py-3 px-6 rounded-md  text-[#1771BF]">
                  <Link href='#' >Download CV</Link>
                  
              </div>
          </div>
        </div>

      </section>
      <TechStack/>
      <Portfolio/>
      {/* <Contact/>
      <About/>
       */}
     
    
    </>
  );
}

export default Home;
