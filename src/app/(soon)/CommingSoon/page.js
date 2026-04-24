import BackButton from "@/app/components/BackButton/BackButton";
import Countdown from "@/app/components/ComingSoon/Countdown";

export default function CommingSoon() {
    // Definujemy datę docelową po stronie serwera
    // 30 dni od dzisiaj (piątek, 24 kwietnia 2026) -> 24 maja 2026
    const targetDate = new Date("2026-05-24T00:00:00").getTime();

    return (
        <>
            <BackButton />
            <section className="h-screen w-full relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                {/* BACKGROUND GRID EFFECT */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
                
                {/* GLOW EFFECT */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1771BF]/10 rounded-full blur-[120px] pointer-events-none" />

                <Countdown targetDate={targetDate} />
            </section>
        </>
      );
}
