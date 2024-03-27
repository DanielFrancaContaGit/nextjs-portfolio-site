export default function Baner() {
    return(
       
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex  items-start flex-col  text-neutral-content ">
                <div className="w-3/6">
                    <h1 className="text-5xl font-bold">
                        Desenvolvedor de Software experient e apaixonado
                    </h1>
                    <p className="py-6">
                        Com ampla experiência em desenvolvimento de software e habilidades técnicas avançadas, estou pronto para enfrentar qualquer desafio e entregar soluções de alta qualidade.
                    </p>
                    <div className="flex justify-between max-w-60">
                        <button className="btn btn-neutral bg-black rounded">Saiba Mais</button>
                        <button className="btn btn-ghost">Inscreva-se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}