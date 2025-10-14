// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded shadow hover:scale-105 transition-transform">
          <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold mb-2">Titulo</h3>
          <p className="text-gray-600">texto do card.</p>
          <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">Botao</button>
        </div>
    </div>
    </div>
  );
}