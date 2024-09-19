import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Products: React.FC = () => {
  const products = [
    {
      name: "Bajgle na Okrągło",
      image: "/products/bajgiel.png",
      description:
        "Puszyste, chrupiące bajgle z różnorodnymi dodatkami, idealne na każdą porę dnia.",
    },
    {
      name: "Bagietki z Charakterem",
      image: "/products/bagietka.png",
      description:
        "Chrupiące bagietki z wyrazistymi smakami, które rozbudzą Twoje kubki smakowe.",
    },
    {
      name: "Zapiekanki z Pasją",
      image: "/products/zapiekanka.png",
      description:
        "Klasyczne zapiekanki przygotowane z pasją, wypełnione smakowitymi składnikami i zapieczone do perfekcji.",
    },
  ];

  return (
    <div className="flex flex-col items-center container pt-10 md:pt-14 md:pb-40 pb-10">
      <ul className="w-full flex flex-col md:flex-row justify-between gap-12">
        {products.map((product, index) => (
          <li
            key={index}
            className={`${montserrat.className} flex flex-col items-center `}
          >
            <div className={` flex items-center justify-center`}>
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
                className="drop-shadow-xl"
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center -mt-6 mb-4">
              {product.name}
            </h3>
            <p className="text-center md:text-base px-4 md:px-0 text-sm w-80">
              {product.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
