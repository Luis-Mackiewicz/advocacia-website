export default function Areas() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-10">Áreas de Atuação</h1>

      <ul className="grid md:grid-cols-3 gap-6">
        {["Direito Civil", "Direito Trabalhista", "Direito Penal"].map(
          (area) => (
            <li
              key={area}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl mb-2">{area}</h3>
              <p className="text-slate-600">
                Atuação estratégica e responsável na área de {area}.
              </p>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
