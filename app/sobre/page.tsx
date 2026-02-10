import Image from "next/image";
import Advogado from "@/public/advogado.png";

export default function Sobre() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <h1 className="text-4xl font-semibold mb-4">Sobre o Escritório</h1>
        <p className="text-slate-600 max-w-3xl">
          Compromisso com a justiça, dedicação à sua causa. Este site possui
          caráter demonstrativo, com informações fictícias.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            O <strong>Modelo Advocacia</strong> é um escritório com 7 anos de
            atuação em Campo Mourão, pautado pela ética, responsabilidade
            profissional e excelência técnica na prestação de serviços
            jurídicos.
          </p>

          <p>
            Nossa atuação é focada em oferecer soluções jurídicas seguras,
            transparentes e eficazes, sempre com atendimento personalizado e
            atenção às particularidades de cada cliente.
          </p>

          <p>
            Trabalhamos com dedicação nas áreas de Direito Civil, Direito
            Trabalhista e Direito Penal, buscando sempre a melhor estratégia
            jurídica para cada caso.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={Advogado}
            alt="Advogado modelo"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>
      </div>

      {/* DIFERENCIAIS */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-10">Nossos Diferenciais</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-3 text-slate-900">
              Atendimento Humanizado
            </h3>
            <p className="text-slate-600">
              Cada cliente é tratado com atenção, respeito e total
              confidencialidade.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-3 text-slate-900">
              Experiência Profissional
            </h3>
            <p className="text-slate-600">
              Mais de 7 anos de atuação jurídica, com foco em resultados e
              segurança legal.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-3 text-slate-900">
              Ética e Transparência
            </h3>
            <p className="text-slate-600">
              Atuação baseada nos princípios éticos e na comunicação clara com o
              cliente.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
