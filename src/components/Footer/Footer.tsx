import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section className="flex justify-center items-center bg-black h-20 px-8 md:px-20">
      <div className="flex flex-col items-center justify-center text-white">
        <Link
          className="text-xl text-center"
          href={"https://www.julioreyes.dev"}
        >
          www.julioreyes.dev
        </Link>
      </div>
    </section>
  );
}

export default Footer;
