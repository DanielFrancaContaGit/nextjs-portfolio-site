import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-row justify-between w-screen px-20'>

                <div className='text-black'>
                    <h1 className='text-2xl font-bold'>Daniel França</h1>
                    <div className='my-6'>
                        <h2 className='font-bold'>Endereço:</h2>
                        <p>Nível 1, Rua Exemplo, Sydney NSW 2000</p>
                    </div>

                    <h2 className='font-bold'>Contato:</h2>
                    <p>1800 123 4567 info@relume.io</p>

                    <div className='flex justify-between mt-6'>
                        <GitHubIcon/>
                        <LinkedInIcon/>
                        <YouTubeIcon/>
                        <InstagramIcon/>
                    </div>
                </div>

                <div className='flex flex-row w-1/4 justify-between mr-24'>
                    <div className='flex flex-col'>
                        <a href="">Link um</a>
                        <a href="">Link dois</a>
                        <a href="">Link três</a>
                        <a href="">Link quatro</a>
                        <a href="">Link cinco</a>
                    </div>
                    <div className='flex flex-col'>
                        <a href="">Link seis</a>
                        <a href="">Link sete</a>
                        <a href="">Link oito</a>
                        <a href="">Link nove</a>
                        <a href="">Link dez</a>
                    </div>
                </div>

            </div>

            <div className="divider divider-neutral px-20 mt-10"></div>

            <div className='flex flex-row justify-between w-screen h-20 items-center px-20'>
                <p className='text-xs'>© 2024 Daniel França. Todos os direitos reservados.</p>
                <div className='flex justify-between w-1/3 items-center'>
                    <a href="" className='underline text-xs'>Política de Privacidade</a>
                    <a href="" className='underline text-xs'>Termos de Serviço</a>
                    <a href="" className='underline text-xs'>Termos de Serviço</a>
                </div>
            </div>
        </div>
    )
}