import Link from "next/link";
import ShootingStar from "../ShootingStars/ShootingStars";

function Footer() {
    const currentYear = new Date().getFullYear();

    return ( 
        <footer className="pt-24 pb-12 px-4 sm:px-6" id='contact'>
            <div className="container mx-auto max-w-7xl">
                {/* CTA_SECTION */}
                <div className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-16 mb-16 text-center">
                    <ShootingStar />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Let's build something <span className="text-sky-500">together</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                            I'm currently available for freelance work and collaboration. 
                            Have a project in mind? Let's talk!
                        </p>
                        <Link 
                            href="mailto:your-email@example.com"
                            className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all hover:scale-105"
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
                            Full-stack developer focused on creating clean, efficient, and user-centric digital experiences.
                        </p>
                    </div>

                    {/* NAV_LINKS */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Navigate</h4>
                        <ul className="space-y-3 text-zinc-500">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#portfolio" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* SOCIAL_LINKS */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Social</h4>
                        <ul className="space-y-3 text-zinc-500">
                            <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
                    <p>&copy; {currentYear} Maciej Lach. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;