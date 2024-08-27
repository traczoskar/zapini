import Image from "next/image";
import Navbar from "./ui/navbar";
import ActionButtons from "./ui/action-buttons";
import Footer from "./ui/footer";
import Products from "./ui/products";

export default function Home() {
  return (
    <>
      <header className="w-full relative">
        <h1 className="absolute w-1 h-1 overflow-hidden clip-rect-0">
          Zapini - Najlepsze zapiekanki w Słupsku
        </h1>
        <Navbar />
      </header>
      <main className="w-full max-w-[1100px] flex flex-col items-center">
        <div className="h-96 flex w-full items-center py-96">
          <Image
            className="absolute top-40 right-0 z-10"
            src="/sandwich_nobg.png"
            alt="Tło strony"
            width={1000}
            height={300}
            priority
          />
          {/* <Image
          src="/background_2.jpg"
          alt="Tło strony"
          layout="responsive"
          width={16}
          height={9}
        /> */}
          <ActionButtons />
        </div>
        <Products />
      </main>
      <Footer />
    </>
  );
}
