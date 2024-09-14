import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const DeliveryButton: React.FC = () => {
  return (
    <button
      className={` ${inter.className} flex gap-3 items-center bg-neutral-700 bg-opacity-50 hover:bg-[#C6E1EC] hover:text-neutral-700 drop-shadow-md  transition hover:scale-105 text-xl text-white font-bold py-4 px-6 rounded-3xl`}
    >
      Zamów z dostawą
      <Image
        src="/icons/delivery.svg"
        alt="Zamów z dostawą"
        width={35}
        height={35}
        className="text-white"
      />
    </button>
  );
};

export const PickupButton: React.FC = () => {
  return (
    <button
      className={` ${inter.className} flex gap-3 items-center bg-neutral-700 bg-opacity-50 hover:bg-[#f6DCC8] hover:text-neutral-700 drop-shadow-md transition hover:scale-105 text-xl text-white font-bold py-4 px-6 rounded-3xl`}
    >
      Zamów z odbiorem
      <Image
        src="/icons/take-away.svg"
        alt="Zamów z odbiorem"
        width={30}
        height={30}
        className="text-white"
      />
    </button>
  );
};
