import Image from "next/image";
import ModelImg from "@/public/advogado.png";

export default function Advogado() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGEM */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={ModelImg}
            alt="Advogado modelo"
            className="rounded-lg shadow-lg w-full max-w-sm"
            priority
          />
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-2">Dr. João da Silva</h1>

          <p className="text-slate-500 mb-6">OAB/PR 00000</p>

          <p className="text-slate-600 leading-relaxed mb-6">
            Advogado com 7 anos de experiência, atuação focada na ética,
            responsabilidade e excelência técnica, oferecendo atendimento
            jurídico personalizado e estratégico.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="/contato"
              className="bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-800 transition"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
