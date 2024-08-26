import Image from "next/image";
import Navbar from "./ui/navbar";
import ActionButtons from "./ui/action-buttons";

export default function Home() {
  return (
    <header className="w-full relative">
      <h1 className="absolute w-1 h-1 overflow-hidden clip-rect-0">
        Zapini - zapiekanki i inne ciulstwa
      </h1>
      <Navbar />
      <Image
        src="/background.jpg"
        alt="Vercel Logo"
        layout="responsive"
        width={16}
        height={9}
      />
      <ActionButtons />
    </header>
  );
}
