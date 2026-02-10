import Hero from "@/components/hero";
import Image from "next/image";
import Advogado from "@/public/advogado.png";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Compromisso com a justiça
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Escritório modelo com 7 anos de atuação em Campo Mourão,
              oferecendo atendimento ético, transparente e eficiente. Este site
              possui caráter demonstrativo.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={Advogado}
              alt="Advogado modelo"
              className="rounded-lg shadow-lg w-full max-w-sm"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
