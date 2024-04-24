import Image from 'next/image';
import CatalogDesktopImg from '../images/catalogoDesktop.png';
import CatalogMobileImg from '../images/catalogoMobile.png';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import Link from 'next/link';
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TstateModalProject } from '@/types/Types';

function catalogProject({Modal,setModal}:TstateModalProject) {
const StyleForTechs = 'bg-gray-200 pb-1 px-1 rounded-lg flex flex-row max-w-26 items-center'  
    


return (<li className=' max-w-[400px] bg-slate-100 rounded-2xl border-gray-200 border px-1 py-3 shadow-3xl transform transition-transform duration-200 hover:-translate-y-1 '>

<div>

</div>

<div className=' mb-4 flex w-full justify-center max-h-96'>

<div className=' flex max-w-[350px] w-screen400:max-w-[250px]'>
<Image src={CatalogDesktopImg} alt='image' onClick={()=> {setModal({IsOpen:true,img:CatalogDesktopImg} ) } }
className=" border-black rounded-xl border-8 inline max-h-40 cursor-pointer"/>

<Image src={CatalogMobileImg} alt='image' height={160} onClick={()=> setModal({IsOpen:true,img:CatalogMobileImg})}
className="border-black rounded-xl border-4 inline z-10 relative right-10 top-5 max-h-[150px] cursor-pointer"/>

</div>

</div>

<div>
<h4  className=" text-2xl">Catálogo de produtos</h4>

<p className=' text-lg'>catálogo online personalizável.Usuários cadastrados podem gerenciar produtos, 
que são exibidos na página inicial. Eles também podem adicionar um título para exibição.</p>

</div>

<div className='mt-4 flex flex-wrap text-lg gap-1'><b className=''>Tecnologias utilizadas:</b>
<span className={`${StyleForTechs}`}><FaReact className=' mr-[2px]'/> React Js</span>
<span className={`${StyleForTechs}`}><SiTypescript className=' mr-[2px]'/> Typescript</span>
<span className={`${StyleForTechs}`}><SiTailwindcss className=' mr-[2px]'/> Tailwind</span>
<span className={`${StyleForTechs}`}><SiFirebase className=' mr-[2px]'/> Firebase</span>
</div>

<div className=' flex flex-row justify-around mt-4'>

<Link href='https://gabriel372.github.io/catalogo-de-produtos/'
className=' bg-black text-white rounded-lg px-2 flex flex-row items-center max-w-36 py-2 justify-center w-full hover:bg-gray-700'>
<TbWorldWww className=' mr-[2px] text-xl'/>Ver site</Link>

<Link href='https://github.com/Gabriel372/catalogo-de-produtos'
className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center max-w-36 w-full hover:bg-gray-700'>
<FaGithub className=' mr-[2px] text-xl'/>Ver repositório</Link>

</div>

</li>
) 

}

export default catalogProject ;


