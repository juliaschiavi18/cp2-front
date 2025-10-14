// Ex3 — Grid simples

// Crie um `grid` com 2 colunas e 2 linhas, cada célula com fundo cinza claro e altura fixa de `80px`.

export default function Ex3() {
  return (
     <section>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded shadow hover:scale-105 transition-transform">
          <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold mb-2">Card 1</h3>
          <p className="text-gray-600">Descrição breve do card.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Saiba mais</button>
        </div>
        <div className="bg-white p-6 rounded shadow hover:scale-105 transition-transform">
          <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold mb-2">Card 2</h3>
          <p className="text-gray-600">Descrição breve do card.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
