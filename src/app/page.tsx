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
        <div className="absolute bottom-0 flex max-w-[1100px] w-full pb-5">
          <DeliveryButton />
        </div>
      </header>
      <main className="w-full flex flex-col items-center bg-secondary ">
        <div className="relative w-full flex flex-col items-center">
          <Image
            className="absolute bottom-0 right-0 z-10 pointer-events-none"
            src="/sandwich_header.png"
            alt="Tło strony"
            width={1400}
            height={300}
            priority
          />
          <div className=" h-[40vh] max-w-[1100px] pt-5 w-full">
            <PickupButton />
          </div>
        </div>
        <div className="w-full h-screen bg-gradient-to-b from-secondary to-primary flex flex-col items-center">
          <div className="w-full max-w-[1100px]">
          <Products />
          <Footer />
          </div>

          
        </div>

        
      </main>
    
    </>
  );
}
