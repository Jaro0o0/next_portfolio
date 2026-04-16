import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin , faReact , faPython , faTailwindCss , faGitAlt} from "@fortawesome/free-brands-svg-icons";

function TechStack() {
    return ( 
    <>
    {/* TECH_STACK */}
    <section className="py-[95px] px-0">
        {/* Tech Stack */}
        <div className="container mx-auto max-w-7xl">
          {/* TEXT_BOX */}
          <div className="mb-5">
            <h1 className="text-5xl text-white ">Tech stack</h1>
            <p className="mb-2">Technology i use in project</p>
          </div>
          {/* GRID */}
          <div className="grid grid-cols-5 gap-2">


            {/* CARD_ONE */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-sky-700  flex items-center  p-3">
                <FontAwesomeIcon icon={faReact} className="w-6 h-6 text-sky-300"/>

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Ract</span>
                <p className="text-white text-sm">JavaScript Library</p>
              </div>
            </div>

            {/* CARD_PYTHON */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-yellow-600  flex items-center  p-3">
                <FontAwesomeIcon icon={faPython}  className="w-6 h-6 text-yellow-200"/>

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Python</span>
                <p className="text-white text-sm">Programming language</p>
              </div>
            </div>
            

            {/* CARD_TAILWIND */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-sky-700  flex items-center  p-3">
                <FontAwesomeIcon icon={faTailwindCss} className="w-6 h-6 text-sky-300" />

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Tailwind</span>
                <p className="text-white text-sm">CSS framework</p>
              </div>
            </div>

            {/* CARD_GIT */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-red-500  flex items-center  p-3">
                <FontAwesomeIcon icon={faGitAlt} className="w-6 h-6 text-red-300" />

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Git</span>
                <p className="text-white text-sm">Versiion control</p>
              </div>
            </div>

            {/* CARD_DJANGO */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-green-800  flex items-center  p-3">
                <Image src='/icons/django.svg' width={24} height={24} alt="Django Logo"/>

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Django</span>
                <p className="text-white text-sm">Web framework</p>
              </div>
            </div>

            {/* CARD_Postgres */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-blue-700  flex items-center  p-3">
                <Image src='/icons/postgres.png' width={24} height={24} alt="Postgres Logo" />

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Postgres</span>
                <p className="text-white text-sm">Database</p>
              </div>
            </div>

            {/* CARD_NEXT */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-white  flex items-center  p-3">
                <Image src='/icons/next.svg' width={24} height={24} alt="Postgres Logo"/>

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">NextJS</span>
                <p className="text-white text-sm">React framework</p>
              </div>
            </div>

            {/* CARD_MATERIAL_UI */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-blue-700  flex items-center  p-3">
                <Image src='/icons/material.svg' width={24} height={24} alt="Postgres Logo" />

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">MaterialUI</span>
                <p className="text-white text-sm">React libraryk</p>
              </div>
            </div>



            {/* CARD_C */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-indigo-500  flex items-center  p-3">
                <Image src='/icons/C.png' width={26} height={26} alt="C Logo" />

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">C</span>
                <p className="text-white text-sm">Programming language</p>
              </div>
            </div>    


            {/* CARD_Framer */}
            <div className="p-4 flex gap-2 bg-[#171717] rounded-md">
              {/* <FontAwesomeIcon icon={faReact} /> */}
              {/* ICON_BOX */}
              <div className="rounded-md bg-indigo-400  flex items-center  p-3">
                <Image src='/icons/framer-motion.svg' width={24} height={24} alt="Framer Logo" />

              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg">Framer Motion</span>
                <p className="text-white text-sm">React animations library</p>
              </div>
            </div> 



          </div>
        </div>
    </section>
    </>
     );
}

export default TechStack;