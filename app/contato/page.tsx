export default function Contato() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Contato</h1>

      <p className="mb-4">📍 Campo Mourão - PR</p>
      <p className="mb-4">📞 (44) 99999-9999</p>
      <p className="mb-4">✉️ exemplo@gmail.com</p>

      <form className="space-y-4 mt-8">
        <input className="w-full border p-3 rounded" placeholder="Nome" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea
          className="w-full border p-3 rounded"
          placeholder="Mensagem"
        />
        <button className="bg-slate-900 text-white px-6 py-3 rounded">
          Enviar
        </button>
      </form>
    </section>
  );
}
