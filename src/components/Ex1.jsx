// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
        <button className="  flex justify-center items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ">botao</button>
    </div>
  );
}

