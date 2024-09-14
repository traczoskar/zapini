import Image from "next/image";
import Navbar from "./ui/navbar";
import { DeliveryButton, PickupButton } from "./ui/action-buttons";
import Footer from "./ui/footer";
import Products from "./ui/products";

export default function Home() {
  return (
    <>
      <header className="w-full h-[60vh] max-w-[1100px] relative">
        <h1 className="absolute w-1 h-1 overflow-hidden clip-rect-0">
          Zapini - Najlepsze zapiekanki w Słupsku
        </h1>
        <Navbar />
        <div className="absolute bottom-0 max-w-[1100px] w-full pb-5 flex justify-center items-end md:justify-start">
          <DeliveryButton />
        </div>
      </header>
      <main className="w-full flex flex-col items-center bg-secondary ">
        <div className="relative w-full flex flex-col items-center">
          <Image
            className="absolute bottom-0 right-0 z-10 pointer-events-none w-[100vw] h-auto max-w-[1400px]"
            src="/sandwich_header.png"
            alt="Baner z kanapką"
            width={1400}
            height={300}
            priority
            sizes="100vw"
          />
          <div className="absolute pointer-events-none inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary opacity-100 z-20" />
          <div className="h-[40vh] max-w-[1100px] pt-5 w-full flex justify-center items-start md:justify-start">
            <PickupButton />
          </div>
        </div>
        <div className="w-full h-screen bg-gradient-to-b from-secondary to-primary flex flex-col items-center ">
          <div className="w-full max-w-[1100px]">
            <Products />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
