import React from "react";
import Link from "next/link";
import Image from "next/image";
import USAFlag from "@/assets/icons/usa.png";

export default function Header() {
  return (
    <section className="flex justify-between items-center bg-black h-24 px-10 sm:px-20">
      <div className="flex flex-col items-start justify-center text-white">
        <Link className="text-xl sm:text-5xl" href={"/"}>
          MetarCode
        </Link>
        <h2 className="text-sm sm:text-xl">
          Real-Time Weather Data for Pilots and Weather Enthusiasts
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-2">
        <h2 className="text-xl hidden sm:flex">Abbreviation and Acronyms</h2>
        <div className="flex gap-4">
          <Link
            title="Abbreviation and Acronyms (US)"
            href={
              "https://www.weather.gov/media/wrh/mesowest/metar_decode_key.pdf"
            }
          >
            <Image
              src={USAFlag}
              alt="USA Flag Icon Link"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
