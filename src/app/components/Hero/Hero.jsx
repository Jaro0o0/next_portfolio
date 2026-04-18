import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="h-screen w-full relative bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] flex items-center justify-center">
      {/* HERO_HEADER */}
      <div className="text-center flex flex-col gap-5 z-10">
        <span className="text-[#1771BF] font-medium tracking-widest">BASED IN POLAND</span>
        <h1 className="text-8xl font-bold tracking-tighter">Software Engineer</h1>
        <span className="text-xl text-gray-400">Building digital products, brands, and experiences.</span>
        
        {/* BUTTONS_BOX */}
        <div className="flex gap-4 justify-center mt-4">
          {/* WORK BUTTON */}
          <Link 
            href="#portfolio" 
            className="bg-white text-black py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors font-semibold"
          >
            Work
            <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
          </Link>
          
          {/* CV BUTTON */}
          <Link 
            href="/cv.pdf" 
            className="flex items-center gap-2 py-3 px-8 rounded-full border border-[#1771BF] text-[#1771BF] hover:bg-[#1771BF]/10 transition-colors font-semibold"
          >
            Download CV
            <FontAwesomeIcon icon={faDownload} className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
