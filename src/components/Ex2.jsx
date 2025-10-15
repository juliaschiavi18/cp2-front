// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
      
      <div>
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
         <div className="flex flex-row justify-center  ">
        
        <div class="rounded-md bg-blue-600 w-12.5 h-12.5 m-4"></div>
        <div class="rounded-md bg-pink-600 w-12.5 h-12.5 m-4"></div>
        <div class="rounded-md bg-red-600 w-12.5 h-12.5 m-4"></div>
        

      </div>
     
      </div>
     
   
  )
}
