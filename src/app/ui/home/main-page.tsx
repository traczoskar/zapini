import Image from "next/image";
import Navbar from "../navbar";
import { DeliveryButton, PickupButton } from "../action-buttons";
import Footer from "../footer";
import Products from "../products";

export default function MainPage() {
  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center">
      <header className="w-full h-[65vh] md:h-[60vh] max-w-[1200px] relative">
        <h1 className="absolute w-1 h-1 overflow-hidden clip-rect-0">
          Zapini - Pyszne śniadania w Słupsku | Bajgle, zapiekanki, bagietki
        </h1>
        <Navbar />
        <div className="absolute bottom-0 max-w-[1200px] w-full pb-3 md:pb-5  flex justify-center items-end md:justify-start">
          <DeliveryButton href="https://zamow.zapini.pl" />
        </div>
      </header>
      <main className="w-full flex flex-col items-center bg-secondary  ">
        <div className="relative w-full flex flex-col items-center">
          <Image
            className="overflow-hidden absolute -bottom-10 -right-12 md:-bottom-12 md:right-0 z-10 pointer-events-none drop-shadow-lg w-[140vw] md:w-[70vw] h-auto max-w-[1200px]"
            src="/bagel-header.png"
            alt="Baner z bajglem"
            width={1200}
            height={300}
            priority
            sizes="100vw"
          />
          <div className="h-[35vh] md:h-[40vh] max-w-[1200px] pt-3 md:pt-5 w-full flex justify-center items-start md:justify-start">
            <PickupButton href="https://zamow.zapini.pl" />
          </div>
        </div>
        <div className="w-full h-[8vh] md:h-[20vh] bg-gradient-to-b from-secondary to-primary flex flex-col items-center " />
        <div className="w-full bg-primary flex flex-col items-center ">
          <div className="w-full max-w-[1200px] bg-primary">
            <Products />
          </div>
          <div className="w-full  bg-secondary">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
