import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/pexels-cottonbro-studio-3997989.jpg)` }}
    >
      <div className="container mx-auto px-4 py-24 flex items-center justify-center">
        <div className="text-left w-full lg:w-1/2">
          <h1 className="text-8xl font-bold text-white leading-tight">
            Elige una mejor tú
          </h1>
          <p className="text-gray-200 text-4xl mb-8">
            ¿Lista para lucir radiante en cualquier ocasión? Con nuestros
            tratamientos de belleza, podrás deslumbrar con una apariencia
            impecable y llena de confianza.
          </p>
          <Link
            href="/schedule-appointment"
            className="inline-block px-6 py-2.5 bg-[#533745] text-white font-bold text-center rounded-full md:hover:bg-opacity-75"
          >
            Agendar cita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
