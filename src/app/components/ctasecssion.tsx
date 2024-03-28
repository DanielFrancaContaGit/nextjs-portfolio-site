export default function CTA(){
    return(
        <div className="flex flex-row w-full h-96 lg:flex-row justify-center items-center bg-black px-24">
            <div className="flex flex-col text-white content-around justify-center items-center">
            
                <h1 className="text-4xl font-bold my-3 text-center">
                    Desenvolvimento de projetos <br/>
                    personalizados
                </h1>
                <p className="my-10">
                    Entre em contato para discutir suas ideias e iniciar uma parceria de sucesso.
                </p>
                <div className="flex justify-between min-w-60 mt-5">
                    <button className="btn rounded text-black">Contato</button>
                    <button className="btn btn-outline text-white rounded">Redes sociais</button>
                </div>
            </div>
           
        </div>
    )
}