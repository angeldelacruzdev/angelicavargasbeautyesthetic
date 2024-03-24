import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Image src="/logo.png" alt="Logo" width={250} height={250} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Próximamente!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Estamos trabajando en algo increíble. ¡Vuelve pronto para
            descubrirlo!
          </p>
        </div>
      </div>
    </main>
  );
}
