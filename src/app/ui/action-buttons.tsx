import Image from "next/image";

const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <button className="flex gap-3 items-center bg-neutral-700 bg-opacity-50 hover:bg-sky-500 drop-shadow-md  transition hover:scale-105 text-xl text-white font-bold py-4 px-6 rounded-3xl">
        Zamów z dostawą
        <Image
          src="/delivery.svg"
          alt="Zamów z dostawą"
          width={35}
          height={35}
          className="text-white"
        />
      </button>
      <button className="flex gap-3 items-center bg-sky-700 hover:bg-sky-500 drop-shadow-md transition hover:scale-105 text-xl text-white font-bold py-4 px-6 rounded-3xl">
        Zamów z odbiorem
        <Image
          src="/take-away.svg"
          alt="Zamów z odbiorem"
          width={30}
          height={30}
          className="text-white"
        />
      </button>
    </div>
  );
};

export default ActionButtons;
