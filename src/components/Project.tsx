import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TstateModalProject,TstateTheme,TprojectReceived } from '@/types/Types';
import { useContext,useRef } from 'react';
import { MyContext } from '@/context/MyContext';
import { motion } from 'framer-motion';
import { ScrollVariants,ScrollTransition } from './AnimationMotion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import ImgCatalogProductMobile from '../images/catalogoMobile.png'
import ImgCatalogProductDesktop from '../images/catalogoDesktop.png'
import ImgRegistMembMobile from '../images/cadastroMobile.png'
import ImgRegistMembDesktop from '../images/cadastroDesktop.png'
import ImgBestCarMobile from '../images/BestCarMobile.png'
import ImgBestCarDesktop from '../images/BestCarDesktop.png'
import { ReturnIconsTech } from "./Functions";

function Project({item}:TprojectReceived) {
    const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
    const ThemeForComponent = ThemeIsDark ? 'text-white bg-gray-800 duration-500  border-gray-700 '
    :'duration-500 bg-white  from-gray-600 to-white bg-slate-100 border-gray-100 ' ;   
    const [ref, inView] = useInView();
    const containerRef = useRef(null);  
    const {setModal} = useContext(MyContext) as TstateModalProject ;
 
function ReturnImage(projectName:string , screenType:string) {
if (projectName === 'Catálogo de produtos' && screenType === 'desktop') {
return ImgCatalogProductDesktop
}
else if (projectName === 'Catálogo de produtos' && screenType === 'mobile') {
return ImgCatalogProductMobile  
}
else if (projectName === 'Cadastrador de membros' && screenType === 'desktop') {
  return ImgRegistMembDesktop  
}
else if (projectName === 'Cadastrador de membros' && screenType === 'mobile') {
  return ImgRegistMembMobile  
}
else if (projectName === 'Best car' && screenType === 'desktop') {
  return ImgBestCarDesktop  
}
else if (projectName === 'Best car' && screenType === 'mobile') {
  return ImgBestCarMobile  
}
return ''
}

return (
<div ref={containerRef} >

<div ref={ref}>

<motion.div  
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={ScrollVariants}
  transition={ScrollTransition}
className={`${ThemeForComponent} max-w-[400px]  rounded-2xl  border px-2 py-3 shadow-2xl transform transition-transform duration-200 hover:-translate-y-1 min-h-[33.2rem]
flex flex-col justify-between`}>

<div className=' mb-4 flex w-full justify-center max-h-96'>
<div className=' flex max-w-[21rem] w-screen300:mx-1 w-screen400:max-w-[17rem] '>
<Image src={ReturnImage(item.name,'desktop')} width={1000} height={1000} alt='image' 
onClick={()=> {setModal({IsOpen:true,img:ReturnImage(item.name,'desktop')} ) } } 
className={` border-black rounded-xl  inline max-h-40 cursor-pointer w-screen400:border-[0.4rem] border-[0.5rem] `}/>

<Image src={ReturnImage(item.name,'mobile')} alt='image'  width={1000} height={1000} 
onClick={()=> setModal({IsOpen:true,img:ReturnImage(item.name,'mobile')})}
className={` border-black rounded-xl border-4 inline  relative right-10 top-8 max-h-[8.6rem] cursor-pointer 
w-screen400:max-h-[5.7rem] w-screen400:rounded-md w-screen400:border-[3px] w-screen400:top-[3.7rem] `}/>
</div>

</div>

<div>
<h4  className=" text-2xl mb-2">{item.name}</h4>
<p className=' text-lg'>{item.description}</p>
</div>

{ReturnIconsTech(item.name)}

<div className=' flex justify-around mt-4 flex-wrap gap-1 w-screen350:gap-2'>
<Link href={item.linkSite}
className={`bg-black text-white rounded-lg px-2 flex flex-row items-center max-w-36 py-2 justify-center w-full
 hover:bg-gray-700 border border-gray-700 w-screen350:max-w-[10rem]`}>
<TbWorldWww className=' mr-[2px] text-xl'/>Ver site</Link>

<Link href={item.linkRepository}
className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-h-11 border border-gray-700 max-w-40'>
<FaGithub className=' mr-[2px] text-xl'/>Ver Código</Link>
</div>

</motion.div>
</div>

</div>
)  }
export default Project ;
