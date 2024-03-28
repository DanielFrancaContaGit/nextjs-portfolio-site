export default function SobreSecssion() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col-reverse md:justify-around md:flex-row-reverse">
        {/* <img 
                    src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" 
                    className="max-w-sm rounded-lg shadow-2xl" 
                    /> */}
        <figure className="rounded-lg shadow-2xl md:size-96">
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Shoes"
            className="size-full object-none"
          />
        </figure>

        <div className="md:w-1/2 px-10">
          <h1 className="text-5xl font-bold">Português (BR)</h1>
          <p className="py-6">
            Sou um desenvolvedor apaixonado por tecnologia, com experiência em projetos desafiadores. Minhas habilidades incluem programação em várias linguagens, resolução de problemas e trabalho em equipe. Tenho formação acadêmica na área de Ciência da Computação e estou sempre em busca de aprendizado e crescimento profissional.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}
