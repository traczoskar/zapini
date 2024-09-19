import { Inter } from "next/font/google";
import Image from "next/image";
import DeliveryIcon from "/public/icons/delivery.svg";
import PickupIcon from "/public/icons/take-away.svg";

const inter = Inter({ subsets: ["latin"] });

export const DeliveryButton: React.FC = () => {
  return (
    <button
      className={` ${inter.className} flex gap-3 items-center bg-neutral-700 bg-opacity-50 hover:bg-[#C6E1EC] hover:text-neutral-700 drop-shadow-md  transition hover:scale-105  text-base md:text-xl text-white hover:text-neutral-700 font-bold  px-4 py-3 md:py-4 md:px-6 rounded-3xl z-20`}
    >
      Zamów z dostawą
      {/* <Image
        src="/icons/delivery.svg"
        alt="Zamów z dostawą"
        width={35}
        height={35}
        className="text-white"
      /> */}
      <DeliveryIcon className="md:w-8 md:h-8 w-6 h-6" />
    </button>
  );
};

export const PickupButton: React.FC = () => {
  return (
    <button
      className={` ${inter.className} flex gap-3 items-center bg-neutral-700 bg-opacity-50 hover:bg-[#f6DCC8] hover:text-neutral-700 drop-shadow-md transition hover:scale-105 text-base md:text-xl text-white font-bold px-4 py-3 md:py-4 md:px-6 rounded-3xl z-20`}
    >
      Zamów z odbiorem
      {/* <Image
        src="/icons/take-away.svg"
        alt="Zamów z odbiorem"
        width={30}
        height={30}
        className="text-white"
      /> */}
      <PickupIcon className="md:w-8 md:h-8 w-6 h-6" />
    </button>
  );
};
