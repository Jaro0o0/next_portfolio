import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="fixed top-0 w-full p-5 bg-black z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">ML</h1>

            {/* OPTIONS */}
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:underline">Praca</a>
              </li>
              <li>
                <a href="#" className="hover:underline">O mnie</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* ICONS_BOX */}
          <div className="flex gap-4 items-center">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="https://github.com/Jaro0o0" aria-label="GitHub" className="hover:opacity-80">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <div className="theme-switcher"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
