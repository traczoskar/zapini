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
        <Image
          src="/background_2.jpg"
          alt="Tło strony"
          layout="responsive"
          width={16}
          height={9}
        />
        <ActionButtons />
      </header>
      <main className="w-full max-w-[1100px] flex flex-col items-center">
        <Products />
      </main>
      <Footer />
    </>
  );
}
