import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="w-full bg-[#392843]">
        <div className="flex h-20 w-full items-center justify-between px-4 sm:px-12">
          <div className="flex shrink-0 items-center gap-3 sm:gap-6">
            <a href="#" className="flex items-center">
              <Image src="/home/emblem-rektor.webp" width={540} height={588} alt="Rektor Logo" className="emblems" />
            </a>

            <a href="#" className="flex items-center">
              <Image src="/home/emblem-sc.webp" alt="SC Logo" width={540} height={745} className="emblems" />
            </a>

            <a href="#" className="flex items-center">
              <Image src="/home/emblem-uc.webp" alt="UC Logo" width={540} height={540} className="emblems" />
            </a>
          </div>
          <div className="flex items-center gap-5 text-base text-white sm:gap-10 sm:text-lg">
            <a href="">Home</a>
            <a href="">Countdown</a>
          </div>
        </div>
      </nav>

      <main className="relative flex-2 overflow-hidden">
        <Image src="/home/background.webp" alt="Background" width={1439} height={1104} priority className="absolute background z-0" />
        <Image src="/home/rector-main.webp" alt="Rector Background" width={2299} height={1168} className="absolute rector-main z-5" />
        <Image src="/home/cloud.webp" alt="Cloud" width={3587} height={724} priority className="absolute cloud opacity-85 z-10" />
        <Image src="/home/building1.webp" alt="Building1" width={2982} height={893}  className="absolute building1 z-3" />
        <Image src="/home/building2.webp" alt="Building2" width={2888} height={851} className="absolute building2 z-4" />
      </main>
    </div>
  );
}
