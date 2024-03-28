
export default function Contato() {
  return (
    <div className="hero h-screen">
      <div className="hero-content flex-col-reverse justify-around md:flex-row-reverse">
        {/* <img 
                    src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" 
                    className="max-w-sm rounded-lg shadow-2xl" 
                    /> */}
        <figure className="rounded-lg shadow-2xl  md:size-96">
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Shoes"
            className="size-full object-none"
          />
        </figure>

        <div className="md:w-1/2 md:px-10">

          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Receba atualizações sobre projetos e posts
          </h1>
          <p className="pt-6">
            Inscreva-se para receber as últimas novidades e atualizações
          </p>
          <div className="py-6 hidden md:flex">
            <input className="input input-bordered border-black rounded " placeholder="Digite seu Email" />
            <button className="btn md:ml-3 bg-black text-white rounded mt-5 md:mt-0 ">Subscribe</button>
          </div>
          <div className="py-6 felx md:hidden xl:flex-row">
            <input className="input input-bordered border-black rounded w-full" placeholder="Digite seu Email" />
            <button className="btn bg-black text-white rounded mt-5 md:mt-0 w-full">Subscribe</button>
          </div>

          <p>
            Ao clicar em Inscrever-se, você confirma que concorda com nossos Termos e Condições.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}
