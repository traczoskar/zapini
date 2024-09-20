"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    dni: 0,
    godzin: 0,
    minut: 0,
    sekund: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(
      targetDate.getDate() + ((6 - targetDate.getDay() + 7) % 7)
    );
    targetDate.setHours(11, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          dni: Math.floor(difference / (1000 * 60 * 60 * 24)),
          godzin: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minut: Math.floor((difference / 1000 / 60) % 60),
          sekund: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-none">
      <Image
        className="w-[50vw]  lg:w-[15vw]  pb-20 "
        src="/zapini_header.png"
        alt="Zapini logo"
        width={300}
        height={150}
        sizes="100vw"
      />
      <h1 className="absolute w-1 h-1 overflow-hidden clip-rect-0">
        Zapini - Najlepsze zapiekanki w Słupsku
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Wkrótce otwarcie!</h2>
      <div className="flex space-x-4 border-2 border-zinc-100 bg-[#C6E1EC] px-10 py-4 rounded-full drop-shadow-md">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-3xl font-semibold">{value}</span>
            <span className="text-sm">{unit}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-8 mx-4">
        <h2 className="text-lg font-semibold ">
          Zapraszamy już 21.09.2024 (sobota)
        </h2>
        <h3 className="text-lg font-normal text-center">
          {" "}
          do naszego lokalu na ul. Bema 14 w Słupsku!
        </h3>
        <h3 className="text-lg font-semibold text-center">
          Otwieramy o godz. 9.00
        </h3>
      </div>
    </main>
  );
}
