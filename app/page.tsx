import { Metadata } from "next";
import Link from "next/link";
import { CardItem } from "./components/CardItem";

export const metadata: Metadata = {
  title: "Angelica Vargas Beauty Aesthetic",
  description:
    "Dedicada a ofrecer servicios de estética y cuidado personal de alta calidad. Nuestro objetivo es realzar la belleza natural de nuestros clientes mediante tratamientos especializados y personalizados.",
  authors: [{ name: "Angel De La Cruz", url: "soft2now.com" }],
  icons: [
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "apple-touch-icon", url: "/favicon-32x32.png", sizes: "32x32" },
  ],
  manifest: "/site.webmanifest",
  assets:
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
};
export default function Home() {
  return (
    <main>
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
      <div className="grid grid-flow-col">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </main>
  );
}
