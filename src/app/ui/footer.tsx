import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="bg-white text-neutral-500 py-12  w-full">
      <div className="container mx-auto flex flex-col md:flex-row gap-36 md:max-w-[1100px]">
        {/* Logo section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/zapini_logo.png"
            alt="Zapini logo"
            width={200}
            height={100}
            loading="lazy"
          />
        </div>

        {/* Contact section */}
        <address className="flex flex-col gap-4 not-italic">
          <h3 className="font-semibold mb-2">Kontakt</h3>
          <a href="tel:+48535630040" className="flex gap-4 hover:text-sky-600">
            <Image src="/phone.svg" alt="Telefon" width={20} height={20} />
            535 630 040
          </a>
          <a
            href="mailto:kontakt@zapini.pl"
            className="flex gap-4 hover:text-sky-600"
          >
            <Image src="/email.svg" alt="Telefon" width={20} height={20} />
            kontakt@zapini.pl
          </a>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.facebook.com"
              className=" hover:bg-sky-600 bg-sky-800 p-2 rounded-full "
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:bg-sky-600 bg-sky-800 p-2 rounded-full "
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </address>

        {/* Opening hours */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold mb-2">Godziny otwarcia</h3>
          <span>Pon-Pt: 9:00 - 17:00</span>
          <span>Sob: 10:00 - 14:00</span>
          <span>Nd: Zamknięte</span>
        </div>

        {/* Address */}
        <address className="flex flex-col gap-4 not-italic">
          <h3 className="font-semibold mb-2">Adres</h3>
          <span>ul. Bema 15</span>
          <span>76-200 Słupsk</span>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
