import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Zapini",
  description: "Zobacz nasze pyszne menu w Zapini",
};

export default function MenuPage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <object
        data="/zapini_menu.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <div className="flex flex-col justify-center gap-8 items-center h-screen">
          <p className="text-center text-lg mx-4">
            Twoja przeglądarka nie obsługuje wbudowanych plików PDF. Możesz{" "}
            <a href="/zapini_menu.pdf">pobrać plik PDF</a> aby wyświetlić go
            lokalnie.
          </p>
          <a
            href="/zapini_menu.pdf"
            className="text-[#333333] bg-[#C6E1EC] rounded-full px-6 py-3 border-2 drop-shadow active:scale-95 transition-transform "
          >
            Otwórz Menu
          </a>
        </div>
      </object>
    </div>
  );
}
