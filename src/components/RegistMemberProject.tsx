import Image from 'next/image';
import RegistMobileImg from '../images/cadastroMobile.png';
import RegistDesktopImg from '../images/cadastroDesktop.png';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import Link from 'next/link';
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TstateModalProject } from '@/types/Types';



function RegistMemberProject({Modal,setModal}:TstateModalProject) {
    const StyleForTechs = ' bg-gray-200 pb-1 px-1 rounded-lg flex flex-row max-w-26 items-center'  

    

return (<li className='  max-w-[400px] bg-slate-100 rounded-2xl border-gray-200 border px-1 py-3 shadow-3xl transform transition-transform duration-200 hover:-translate-y-1 '>

    <div>
    
    </div>
    
    <div className=' mb-4 flex w-full justify-center max-h-96'>
    
    <div className=' flex max-w-[350px] w-screen400:max-w-[250px]'>
    <Image src={RegistDesktopImg} alt='image' height={150} onClick={()=> {setModal({IsOpen:true,img:RegistDesktopImg} ) } }
    className=" border-black rounded-xl border-8 inline max-h-40 cursor-pointer"/>
    
    <Image src={RegistMobileImg} alt='image' height={160} onClick={()=> setModal({IsOpen:true,img:RegistMobileImg})}
    className="border-black rounded-xl border-4 inline z-10 relative right-10 top-5 max-h-[150px] cursor-pointer"/>
    
    </div>
    
    </div>
    
    <div>
    <h4  className=" text-2xl">Cadastrador de membros</h4>
    
    <p className=' text-xl'>É um cadastrador onde o usuário se cadastra para gerenciar os membros registrados, incluindo a capacidade de adicionar fotos aos seus perfis.</p>
    
    </div>
    
    <div className='mt-4 flex flex-wrap text-lg gap-1'><b className=''>Tecnologias utilizadas:</b>
    <span className={`${StyleForTechs}`}><FaReact className=' mr-[2px]'/> React Js</span>
    <span className={`${StyleForTechs}`}><SiTypescript className=' mr-[2px] '/> Typescript</span>
    <span className={`${StyleForTechs}`}><FaCss3Alt className=' mr-[2px]'/> Css</span>
    <span className={`${StyleForTechs}`}><SiFirebase className=' mr-[2px]'/> Firebase</span>
    </div>
    
    <div className=' mt-4 flex flex-row justify-around'>
    
    <Link href='https://gabriel372.github.io/cadastro-de-membros/'
    className=' bg-black text-white rounded-lg px-2 flex flex-row items-center max-w-36 py-2 justify-center w-full hover:bg-gray-700'>
    <TbWorldWww className=' mr-[2px] text-xl'/>Ver site</Link>
    
    <Link href='https://github.com/Gabriel372/cadastro-de-membros'
    className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center max-w-36 w-full hover:bg-gray-700'>
    <FaGithub className=' mr-[2px] text-xl'/>Ver repositório</Link>
    
    </div>
    
</li>
) 

}

export default RegistMemberProject


