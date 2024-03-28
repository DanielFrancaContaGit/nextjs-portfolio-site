export default function Galeria() {
  return (
    <div className="flex flex-col h-screen justify-center items-center p-5">
      <h1 className="text-5xl text-black font-bold mb-5">Galeria de Imagens</h1>
      <p>Explore projetos anteriores e interfaces criadas pelo desenvolvedor.</p>
      <div className="carousel carousel-center w-9/12 p-4 space-x-4 rounded mt-10">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded size-80" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded size-80" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded size-80" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded size-80" />
        </div>

        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded size-80" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded size-80" />
        </div>
      </div>
    </div>
  )
}
