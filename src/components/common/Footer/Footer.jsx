

import Link from "next/link";
import ScrollLink from "../../ScrollLink/ScrollLink";
import ShootingStar from "../../ShootingStars/ShootingStars";

function Footer() {
    const currentYear = new Date().getFullYear();

    return ( 
        <footer className="pt-24 pb-12 px-4 sm:px-6" >
            <div className="container mx-auto max-w-7xl">
                {/* CTA_SECTION */}
                <div className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-16 mb-16 text-center">
                    <ShootingStar />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Let's build something <span className="text-sky-500">together</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                            I'm currently available for work. 
                            Have a project in mind? Let's talk!
                        </p>
                        <Link 
                            href="mailto:jar0dev80@gmail.com"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 font-semibold leading-none text-black shadow-lg hover:bg shadow-white/10 hover:bg-[#1771BF]   hover:text-white transition-all duration-300 "
                        >
                            Send an email
                        </Link>
                    </div>
                </div>

                {/* BOTTOM_SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
                    {/* BRAND_INFO */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">Maciej Lach</h3>
                        <p className="text-zinc-500 max-w-xs leading-relaxed">
                           Front-end focused software engineer who turns ideas into fast, polished, and user friendly web applications.
                        </p>
                    </div>

                    {/* NAV_LINKS */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Navigate</h4>
                        <ul className="space-y-3 text-zinc-500">
                            <li><ScrollLink href="/#home" className="hover:text-white transition-colors">Home</ScrollLink></li>
                            <li><ScrollLink href="/#work" className="hover:text-white transition-colors">Projects</ScrollLink></li>
                        </ul>
                    </div>

                    {/* SOCIAL_LINKS */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Social</h4>
                        <ul className="space-y-3 text-zinc-500">
                            <li><a href="https://github.com/Jaro0o0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/maciej-lach-46555b404/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-zinc-600 text-sm">
                    <p className="text-center">&copy; {currentYear} Maciej Lach. All rights reserved.</p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;
