import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center lg:max-w-[1100px] w-full mx-auto py-4">
      <Link href="/" className="w-1/2 md:w-auto flex justify-center">
        <Image
          className="hover:scale-105  transition-transform py-6 "
          src="/zapini_header.png"
          alt="Zapini logo"
          width={300}
          height={150}
        />
      </Link>
      <ul className="flex flex-col md:flex-row gap-8 text-4xl font-bold tracking-tight text-neutral-500 items-center">
        <li className="hover:text-sky-600 hover:scale-105 text-[60px] transition ">
          <Link href="/menu.pdf" target="_blank" rel="noopener noreferrer">
            menu
          </Link>
        </li>
        <li className="hover:text-sky-600 hover:scale-105 transition pt-3 ">
          <a href="tel:+48535630040">535 630 040</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
