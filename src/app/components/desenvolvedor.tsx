import GitHubIcon from '@mui/icons-material/GitHub';

export default function Desenvolvedor() {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col-reverse justify-around lg:flex-row-reverse">
        {/* <img 
                    src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" 
                    className="max-w-sm rounded-lg shadow-2xl" 
                    /> */}
        <figure className="rounded-lg shadow-2xl lg:size-96">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className='size-full object-cover'
          />
        </figure>

        <div className="lg:w-1/2 lg:px-10">
          <GitHubIcon className='mb-5 lg:mb-10' />
          <h1 className="text-3xl lg:text-5xl font-bold">Desenvolvedor</h1>
          <p className="py-6">
            Contrate um desenvolvedor comprometido, que entrega código de qualidade e oferece suporte pós-entrega.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}
