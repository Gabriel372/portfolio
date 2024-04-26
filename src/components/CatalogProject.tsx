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
import { TstateModalProject,TstateTheme } from '@/types/Types';
import { useContext } from 'react';
import { MyContext } from '@/context/MyContext';

function catalogProject({Modal,setModal}:TstateModalProject) {
const StyleForTechs = ' pb-1 px-1 rounded-lg flex flex-row max-w-26 items-center'  
const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
const ThemeForComponent = ThemeIsDark ? 'text-white bg-gray-800 duration-500  border-gray-700'
:'duration-500 bg-white  from-gray-600 to-white bg-slate-100 border-gray-100 ' ;   
const TheForTech = ThemeIsDark ? 'bg-slate-900':
'bg-gray-200' ;

return (<li className={`${ThemeForComponent} max-w-[400px]  rounded-2xl  border px-1 py-3 shadow-2xl transform transition-transform duration-200 hover:-translate-y-1`}>

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
<h4  className=" text-2xl mb-2">Catálogo de produtos</h4>

<p className=' text-lg'>catálogo online personalizável.Usuários cadastrados podem gerenciar produtos, 
que são exibidos na página inicial. Eles também podem adicionar um título para exibição.</p>

</div>

<div className='mt-4 flex flex-wrap text-lg gap-1'><b className=''>Tecnologias utilizadas:</b>
<span className={`${StyleForTechs} ${TheForTech} `}><FaReact className=' mr-[2px]'/> React Js</span>
<span className={`${StyleForTechs} ${TheForTech}`}><SiTypescript className=' mr-[2px]'/> Typescript</span>
<span className={`${StyleForTechs} ${TheForTech}`}><SiTailwindcss className=' mr-[2px]'/> Tailwind</span>
<span className={`${StyleForTechs} ${TheForTech}`}><SiFirebase className=' mr-[2px]'/> Firebase</span>
</div>

<div className=' flex flex-row justify-around mt-4'>

<Link href='https://gabriel372.github.io/catalogo-de-produtos/'
className=' bg-black text-white rounded-lg px-2 flex flex-row items-center max-w-36 py-2 justify-center w-full hover:bg-gray-700 border border-gray-700'>
<TbWorldWww className=' mr-[2px] text-xl'/>Ver site</Link>

<Link href='https://github.com/Gabriel372/catalogo-de-produtos'
className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-h-11 border border-gray-700 max-w-40'>
<FaGithub className=' mr-[2px] text-xl'/>Ver repositório</Link>

</div>

</li>
) 

}

export default catalogProject ;


