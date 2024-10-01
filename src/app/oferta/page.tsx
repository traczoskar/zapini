import Image from "next/image";
import { League_Spartan } from "next/font/google";
import bagietka from "/public/bagietka_oferta.png";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Oferta - Zapini",
  description: "Zobacz naszą ofertę cateringową w Zapini",
};

const menuItems = [
  {
    category: "Bajgle na okrągło:",
    items: [
      {
        name: "Norweg",
        description: "Łosoś wędzony, serek śmietanowy, szczypiorek, koperek.",
        length: "16 cm",
        price: "26 pln",
      },
      {
        name: "Olmo",
        description:
          "Omlet z pomidorem i szpinakiem, pasta z avocado, cebulka.",
        length: "16 cm",
        price: "20 pln",
      },
      {
        name: "Grismo",
        description:
          "Szarpana wieprzowina, pomidor, sałata, sos musztardowo-miodowy.",
        length: "16 cm",
        price: "19 pln",
      },
    ],
  },
  {
    category: "Bagietki z Charakterem:",
    items: [
      {
        name: "Diego",
        description:
          "Wędzona polędwica, pomidor, ogórek kiszony, ser edamski, sos Dijon, oregano.",
        length: "15 cm",
        price: "15 pln",
      },
      {
        name: "Delikates",
        description:
          "Wędzona polędwica, pomidor, mozzarella, majonez, sałata, szczypiorek.",
        length: "15 cm",
        price: "15 pln",
      },
      {
        name: "Palimir",
        description:
          "Salami chorrizo, karmelizowana cebula i papryka, ostry sos pomidorowy.",
        length: "15 cm",
        price: "15 pln",
      },
      {
        name: "Porkin",
        description:
          "Szarpana wieprzowina w sosie teriyaki, karmelizowana cebula i papryka.",
        length: "15 cm",
        price: "17 pln",
      },
      {
        name: "Pedro",
        description:
          "Wędzona polędwica, boczek, pomidor, awokado, sałata, sos musztardowo-miodowy.",
        length: "15 cm",
        price: "18 pln",
      },
      {
        name: "Veger",
        description:
          "Wegański majonez, wegańskie plastry kanapkowe, sałata, pomidor, szczypiorek.",
        length: "15 cm",
        price: "16 pln",
      },
    ],
  },
];

export default function OfertaPage() {
  return (
    <div
      className={`${leagueSpartan.className} bg-[#f6DCC8] min-h-screen max-w-[1100px] mx-auto flex flex-col items-center p-8`}
    >
      <Image
        src="/zapini_header.png"
        alt="Zapini logo"
        width={200}
        height={100}
        className="mb-8"
      />

      <h1 className="text-3xl font-bold text-center mb-6 text-[#555555]">
        Świeże i smaczne śniadania w rozsądnej cenie – inwestycja, która się
        opłaca!
      </h1>

      <div className=" text-center text-[#555555] text-lg space-y-6 mb-12">
        <p>
          Chcesz tanio i skutecznie zadbać o swoich pracowników? Oferujemy
          codzienne dostawy świeżych bagietek i bajgli, które nie obciążą
          budżetu, a jednocześnie zapewnią smaczny start dnia! Nasze wypieki są
          doskonałym sposobem na wzmocnienie morale zespołu i poprawę
          komunikacji w firmie – wspólny posiłek integruje i buduje pozytywną
          atmosferę.
        </p>

        <p>
          Elastyczne zamówienia, codzienna świeżość i niska cena – to prosty
          sposób, aby zainwestować w zadowolenie swojego zespołu. Zadbaj o ich
          komfort, nie przepłacając!
        </p>
      </div>

      <Image
        src={bagietka}
        alt="Bagietka"
        width={600}
        height={150}
        className="mb-12"
      />

      <div className="w-full max-w-[90%] text-[#333333]">
        <div className="grid grid-cols-[4fr_1fr_1fr] gap-4 font-semibold mb-2">
          <h2 className="text-2xl font-bold mb-6 ">Klasyczna oferta:</h2>
          <div className="text-center">Długość</div>
          <div className="text-right">cena brutto/szt</div>
        </div>
        {menuItems.map((category, index) => (
          <div key={index} className="mb-8 w-full">
            <h3 className="text-2xl font-semibold mb-10 ">
              {category.category}
            </h3>

            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-4 pb-4 ">
                  <div className="grid text-xl grid-cols-[4fr_1fr_1fr] gap-4">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-center">{item.length}</div>
                    <div className="text-right">{item.price}</div>
                  </div>
                  <p className="text-lg mt-1 max-w-[50%]">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[90%] text-center flex flex-col items-center text-[#333333] my-12">
        <p className="text-xl font-semibold mb-4">
          Minimalne zamówienie to 5 sztuk jednej pozycji.
        </p>
        <p className="text-xl font-semibold mb-8">
          Przy dużych zamówieniach cena podlega negocjacji.
        </p>

        <p className="text-lg mb-4 max-w-[80%]">
          Zapraszamy do kontaktu telefonicznego i mailowego. Istnieje możliwość
          złożenia jednorazowego jak i cyklicznego zamówienia. Dodatkowo możemy
          tworzyć nowe bagietki na zamówienie zgodnie z preferencjami.
        </p>

        <div className="mt-8">
          <a
            href="tel:535630040"
            className="text-xl font-bold mr-4 hover:underline"
          >
            535 630 040
          </a>
          <a
            href="mailto:kontakt@zapini.pl"
            className="text-xl font-bold hover:underline"
          >
            kontakt@zapini.pl
          </a>
        </div>
      </div>
    </div>
  );
}
