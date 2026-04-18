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
            <h1 className="text-5xl text-white mb-2 ">Tech stack</h1>
            <p className="text-zinc-400 ">I use modern technologies and best practices to build efficient and maintainable solutions.</p>
            <p className="text-zinc-400 "> My tech stack is chosen to match project needs while ensuring performance and great user experience.</p>
          </div>
          {/* GRID */}
          <div className="grid grid-cols-5 gap-4">


            {/* CARD_ONE */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-cyan-500/10 flex items-center p-3">
                <FontAwesomeIcon icon={faReact} className="w-6 h-6 text-cyan-400"/>
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">React</span>
                <p className="text-zinc-500 text-xs">JavaScript Library</p>
              </div>
            </div>

            {/* CARD_PYTHON */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-blue-500/10 flex items-center p-3">
                <FontAwesomeIcon icon={faPython}  className="w-6 h-6 text-yellow-500"/>
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">Python</span>
                <p className="text-zinc-500 text-xs">Programming language</p>
              </div>
            </div>
            

            {/* CARD_TAILWIND */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-sky-500/10 flex items-center p-3">
                <FontAwesomeIcon icon={faTailwindCss} className="w-6 h-6 text-sky-400" />
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">Tailwind</span>
                <p className="text-zinc-500 text-xs">CSS framework</p>
              </div>
            </div>

            {/* CARD_GIT */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-orange-600/10 flex items-center p-3">
                <FontAwesomeIcon icon={faGitAlt} className="w-6 h-6 text-[#F05032]" />
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">Git</span>
                <p className="text-zinc-500 text-xs">Version control</p>
              </div>
            </div>

            {/* CARD_DJANGO */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-emerald-900/20 flex items-center p-3">
                <Image src='/icons/django.svg' width={24} height={24} alt="Django Logo"/>
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">Django</span>
                <p className="text-zinc-500 text-xs">Web framework</p>
              </div>
            </div>

            {/* CARD_Postgres */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-blue-500/10 flex items-center p-3">
                <Image src='/icons/postgres.png' width={24} height={24} alt="Postgres Logo" />
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">Postgres</span>
                <p className="text-zinc-500 text-xs">Database</p>
              </div>
            </div>

            {/* CARD_NEXT */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-white/10 flex items-center p-3">
                <Image src='/icons/next.svg' width={24} height={24} alt="NextJS Logo" className="invert brightness-200"/>
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">NextJS</span>
                <p className="text-zinc-500 text-xs">React framework</p>
              </div>
            </div>

            {/* CARD_MATERIAL_UI */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-blue-600/10 flex items-center p-3">
                <Image src='/icons/material.svg' width={24} height={24} alt="MaterialUI Logo" />
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">MaterialUI</span>
                <p className="text-zinc-500 text-xs">React library</p>
              </div>
            </div>



            {/* CARD_C */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-indigo-500/10 flex items-center p-3">
                <Image src='/icons/C.png' width={26} height={26} alt="C Logo" />
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">C</span>
                <p className="text-zinc-500 text-xs">Programming language</p>
              </div>
            </div>    


            {/* CARD_Framer */}
            <div className="p-4 flex gap-3 bg-[#171717] rounded-md border border-white/5 hover:border-white/10 transition-colors">
              {/* ICON_BOX */}
              <div className="rounded-md bg-purple-500/10 flex items-center p-3">
                <Image src='/icons/framer-motion.svg' width={24} height={24} alt="Framer Logo" />
              </div>
              {/* TEXT_BOX */}
              <div>
                <span className="text-white text-lg block leading-tight">Framer Motion</span>
                <p className="text-zinc-500 text-xs">Animations library</p>
              </div>
            </div> 



          </div>
        </div>
    </section>
    </>
     );
}

export default TechStack;