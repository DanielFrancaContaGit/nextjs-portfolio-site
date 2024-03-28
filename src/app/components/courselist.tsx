export default function CourseList(){
    return(
        <div className="flex mt-10 min-h-screen flex-col justify-center items-center p-10">
            <div className="w-screen pl-20 mb-24">
                <p className="font-bold text-black">Blog</p>
                <h1 className="text-5xl font-bold text-black my-4">
                    Cursos Realizados Pelo <br/> Desenvolvedor
                </h1>
                <p>Aprimore suas habilidades com cursos relevantes</p>
            </div>

            <div className="flex flex-row justify-around w-screen px-20">
                <div className="card w-96 bg-base-100 shadow-xl rounded">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-sm font-bold text-black">Categoria</p>
                        <h2 className="card-title font-bold text-black">
                            Título do Blog Aqui
                        </h2>
                        <p>Descrição do conteúdo do blog</p>
                        <div className="card-actions mt-5">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h1>Nome Completo</h1>
                                <p>11 jan 2024 - 5 min de leitura</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl rounded">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-sm font-bold text-black">Categoria</p>
                        <h2 className="card-title font-bold text-black">
                            Título do Blog Aqui
                        </h2>
                        <p>Descrição do conteúdo do blog</p>
                        <div className="card-actions mt-5">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h1>Nome Completo</h1>
                                <p>11 jan 2024 - 5 min de leitura</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl rounded">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-sm font-bold text-black">Categoria</p>
                        <h2 className="card-title font-bold text-black">
                            Título do Blog Aqui
                        </h2>
                        <p>Descrição do conteúdo do blog</p>
                        <div className="card-actions mt-5">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h1>Nome Completo</h1>
                                <p>11 jan 2024 - 5 min de leitura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <button className="btn btn-outline justify-self-end rounded mt-20">Ver todos</button>
        </div>
    )
}