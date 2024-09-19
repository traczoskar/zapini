import { Inter } from "next/font/google";
import DeliveryIcon from "/public/icons/delivery.svg";
import PickupIcon from "/public/icons/take-away.svg";

const inter = Inter({ subsets: ["latin"] });

export const DeliveryButton = ({ href }: { href?: string }) => {
  return (
    <a
      href={href}
      title="Zamów z dostawą"
      aria-label="Zamów z dostawą"
      target="_blank"
      rel="noopener noreferrer"
      className={` ${inter.className} w-56 md:w-72 flex gap-4 justify-center items-center bg-neutral-700 bg-opacity-50 hover:bg-[#C6E1EC] drop-shadow-md  transition hover:scale-105  text-base md:text-xl text-white hover:text-neutral-700 font-bold  px-4 py-3 md:py-4 md:px-6 rounded-3xl z-20`}
    >
      Zamów z dostawą
      <DeliveryIcon className="md:w-8 md:h-8 w-6 h-6" />
    </a>
  );
};

export const PickupButton = ({ href }: { href?: string }) => {
  return (
    <a
      href={href}
      title="Zamów z odbiorem"
      aria-label="Zamów z odbiorem"
      target="_blank"
      rel="noopener noreferrer"
      className={` ${inter.className} w-56 md:w-72 flex gap-4 justify-center bg-neutral-700 bg-opacity-50 hover:bg-[#f6DCC8] hover:text-neutral-700 drop-shadow-md transition hover:scale-105 text-base md:text-xl text-white font-bold px-4 py-3 md:py-4 md:px-6 rounded-3xl z-20`}
    >
      Zamów z odbiorem
      <PickupIcon className="md:w-8 md:h-8 w-6 h-6" />
    </a>
  );
};
