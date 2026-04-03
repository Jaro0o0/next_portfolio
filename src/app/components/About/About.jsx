import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBook , faLocationCrosshairs,faArrowRight} from "@fortawesome/free-solid-svg-icons";

function About() {
    return ( 
        <section className="py-[95px] px-0">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2">
                    {/* COL_ONE */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl text-white">Maciej Lach</h1>
                        {/* ICONS_BOX */}
                        <div>
                            {/* ICON_BOX */}
                            <ul className="flex flex-col gap-3">
                                <li className="flex gap-3"> <FontAwesomeIcon icon={faCode} className="w-6 h-6" />Software Enginer</li>
                                <li className="flex gap-3"> <FontAwesomeIcon icon={faBook}  className="w-6 h-6" /> 1 Year  of Experience</li>
                                <li className="flex gap-3"> <FontAwesomeIcon icon={faLocationCrosshairs} className="w-6 h-6" />Poland</li>

                            </ul>
                        </div>
                        {/* TEXT_BOX */}
                        <div>
                            <p>
                                I am a Software Engineer passionate about creating efficient and user-friendly applications. I enjoy solving complex problems with clean, maintainable code and have experience in Python, JavaScript, and modern web technologies. I thrive in collaborative environments and value continuous learning. Exploring new tools and technologies excites me, as it helps improve software quality. I am driven by curiosity and a desire to build software that makes a real impact. Combining technical skills with creativity, I aim to develop solutions that truly benefit users.
                            </p>
                        </div>
                        {/* BUTTONS_BOX */}
                        <div>
                        </div>
                    </div>
                    {/* COL_TWO */}
                    <div>
                         <h1 className=" text-3xl text-white mb-5">Services</h1>
                         {/* ICONS_BOX */}
                         <div>
                            <ul>
                                <li className="flex gap-3"><FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" /> Full Stack Development</li>
                                <li className="flex gap-3"><FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" /> Frontend Development</li>
                                <li className="flex gap-3"><FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />Backed Development</li>
                                <li className="flex gap-3"><FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />API Integration</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default About;