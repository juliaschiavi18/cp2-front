// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
       <header className="bg-red-800 text-white p-4">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-xl font-bold">Bem vindo</h1>
        <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <li className="relative after:content-[''] after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            <a href="#">Home</a>
          </li>
          <li className="relative after:content-[''] after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            <a href="#" className="animate-blink-link">Promoções</a>
          </li>
          <li className="relative after:content-[''] after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}