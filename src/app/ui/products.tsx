import CircularImage from "./circular-image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Products: React.FC = () => {
  const products = [
    {
      name: "Bajgiel",
      image: "/products/bagel.jpg",
      description: "Pyszne okrągłe pieczywo z dziurką po środku.",
    },
    {
      name: "Kanapki",
      image: "/products/sandwich.jpg",
      description:
        "Smaczne połączenie składników między dwoma kromkami chleba.",
    },
    {
      name: "Zapiekanki",
      image: "/products/toast.jpg",
      description:
        "Grillowana kanapka z włoskim chlebem i różnymi nadzieniami.",
    },
  ];

  return (
    <div className="flex flex-col items-center container py-40">
      <ul className="w-full flex justify-between gap-12">
        {products.map((product, index) => (
          <li
            key={index}
            className={`${inter.className} flex flex-col gap-6 items-center `}
          >
            <CircularImage src={product.image} alt={product.name} />
            <h3 className="font-bold text-2xl">{product.name}</h3>
            <p className="text-center w-64">{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
