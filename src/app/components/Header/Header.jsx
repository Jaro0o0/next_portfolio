import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <nav className="bg-[#121212]/70 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          ML<span className="text-[#1771BF]">.</span>
        </Link>

        {/* NAVIGATION */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <li>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </li>
        </ul>

        {/* SOCIALS & ACTIONS */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 border-r border-white/10 pr-5">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Jaro0o0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
          </div>
          
          <Link 
            href="#contact" 
            className="hidden sm:block text-xs font-bold uppercase tracking-wider bg-white text-black px-4 py-2 rounded-full hover:bg-[#1771BF] hover:text-white transition-all"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
