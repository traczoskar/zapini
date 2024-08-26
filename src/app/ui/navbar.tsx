import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute flex justify-between max-w-[1100px] w-full right-1/2 translate-x-1/2 top-8">
      <Link href="/">
        <Image
          className="hover:scale-105 transition-transform drop-shadow-md "
          src="/zapini_logo.png"
          alt="Zapini logo"
          width={200}
          height={100}
        />
      </Link>
      <ul className="flex gap-8 text-xl font-semibold text-neutral-700 items-center">
        <li className="hover:text-sky-600 hover:scale-105 transition px-2 py-2">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-sky-600 hover:scale-105 transition px-2 py-2">
          <Link href="/menu.pdf" target="_blank" rel="noopener noreferrer">
            Menu
          </Link>
        </li>
        <li className="hover:text-sky-600 hover:scale-105 transition px-2 py-2">
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
