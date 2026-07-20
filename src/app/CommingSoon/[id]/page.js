import BackButton from "@/components/BackButton/BackButton";
import Countdown from "@/components/ComingSoon/Countdown";
import { timers } from "../data";
import Link from "next/link";

export default  async function CommingSoon( { params }) {
    const { id }  = await params
    const timer = timers.find((item) => item.slug === id)

    if (!timer) {
        return (
            <div className="bg-[#050505] min-h-screen text-white flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold">Timer not found</h1>
                <Link href="/#work" className="text-sky-500 hover:underline">Go back to projects</Link>
            </div>
        );
    }

    const targetDate = new Date(timer.time).getTime();

    return (
        <>
            <BackButton />
            <section className="  h-screen w-full relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                {/* BACKGROUND GRID EFFECT */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
                
                {/* GLOW EFFECT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1771BF]/10 rounded-full blur-[120px] pointer-events-none" />

                <Countdown targetDate={targetDate} />
            </section>
        </>
      );
}
