import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin , faReact , faPython , faTailwindCss , faGitAlt} from "@fortawesome/free-brands-svg-icons";

function Contact () {
    return ( 
        <section className="py-[95px] px-0">
            <div className="container  mx-auto max-w-5xl">
                {/* HEADING */}
                <div className="mb-5">
                    <h1 className="text-white text-3xl">Contact</h1>
                    <p className="text-white">Get in touch</p>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-2 gap-5">
                {/* EMAIL_BOX */}
                <div>
                    <div className="border border-[#171717] rounded-md p-4 flex gap-4">
                        {/* ICON_BOX */}
                        <div className="rounded-md bg-sky-700  flex items-center  p-3">
                            <FontAwesomeIcon icon={faTailwindCss} className="w-6 h-6 text-sky-300" />
                        </div>
                        {/* TEXT_BOX */}
                        <div>
                            <span className="text-white">Email</span>
                            <p>jar0dev80@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* Form_BOX */}
                <div>
                    <form className="flex flex-col gap-5">
                        <input placeholder="name" className="border border-[#171717] rounded-md p-4"/>
                        <input placeholder="e-mail" className="border border-[#171717] rounded-md p-4"/>
                        <textarea placeholder="text" className="border border-[#171717] rounded-md p-4"/>
                        <button type="submit">Wyślj</button>
                    </form>
                </div>
                </div>
            </div>
        </section>
     );
}

export default  Contact;