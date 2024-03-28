export default function Estatistica() {
    return(
        // <div className="hero h-96" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        //     <div className="hero-overlay bg-opacity-60"></div>
       
            <div className="flex flex-row w-full h-96 lg:flex-row justify-center items-center bg-black px-24">
                <div className="flex flex-col text-white content-around">
                    <p>Desenvolvedor de Software</p>
                    <h1 className="text-4xl font-bold my-3">Estatísticas de Carreira</h1>
                    <p>Apresentamos algumas estatísticas relevantes da minha carreira. Confira abaixo.</p>
                    <div className="flex justify-between max-w-60 mt-5">
                        <button className="btn btn-ghost rounded">Saiba Mais</button>
                        <button className="btn btn-ghost rounded">Inscreva-se</button>
                    </div>
                </div>
                <div className="flex flex-row text-white content-around flex-wrap ml-10">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-row mb-5">
                            <div className="divider divider-neutral divider-horizontal "></div>
                            <div>
                                <h1 className="text-5xl font-bold">50+</h1>
                                <p>Projetos Concluídos</p>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="divider divider-neutral divider-horizontal "></div>
                            <div>
                                <h1 className="text-5xl font-bold">10+</h1>
                                <p>Tecnologias Dominadas</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex flex-row mb-5">
                            <div className="divider divider-neutral divider-horizontal "></div>
                            <div>
                                <h1 className="text-5xl font-bold">5+</h1>
                                <p>Anos de Experiência</p>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="divider divider-neutral divider-horizontal "></div>
                            <div>
                                <h1 className="text-5xl font-bold">100%</h1>
                                <p>Satisfação do Cliente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}