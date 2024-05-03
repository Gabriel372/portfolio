import Image from "next/image"
import imgProfile from '../images/imgProfile.jpeg'
import { useState ,useEffect,useContext } from "react"
import Link from "next/link"
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import { TstateTheme } from "@/types/Types";
import { MyContext } from "@/context/MyContext";

function AboutMe() {
const [CursorIsVisible,setCursorIsVisible] = useState(false)
const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
const ThemeForCursor = `${ThemeIsDark ? 'bg-gray-300' : 'bg-gray-600'}`



useEffect(()=>{
const Interval =  setInterval(()=>setCursorIsVisible((prev)=>!prev),700);  
return ()=> clearInterval(Interval)
},[])

return (<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
<section className=" flex w-full justify-evenly mb-7 mt-5 w-screen800:mb-0">

<div className="rounded-tl-3xl rounded-br-3xl animate-float w-screen900:hidden mr-2"> 
<div className="  overflow-hidden rounded-tl-3xl rounded-br-3xl max-h-[23rem] shadow-2xl ">
    <Image src={imgProfile} alt='image' height={500} className=" "/>
</div>
</div>

<div className=' flex justify-center flex-col max-w-[660px] w-full mx-1'>

<div className="  mb-2 w-screen900:mb-0">
<h2 className={`fontGameRetro  text-[40px] mb-2 w-screen800:text-[35px] w-screen450:text-[6vw] `}>Programador</h2>

<h2 className={`fontGameRetro text-end text-[45px] flex justify-end w-screen800:text-[40px] w-screen450:text-[7vw] items-center`}>Front end
<span className={`${!CursorIsVisible && 'invisible'} ${ThemeForCursor} h-14 w-1 w-screen450:h-10`}></span>
</h2>

</div>

<div className="  rounded-tl-3xl rounded-br-3xl animate-float hidden w-screen900:flex justify-center"> 
<div className="  overflow-hidden rounded-tl-3xl rounded-br-3xl max-h-[20rem] shadow-2xl">
    <Image src={imgProfile} alt='image' height={500}   className=""/>
</div>
</div>

<p className=" text-xl text-center mt-6">
Apaixonado por tecnologia e impulsionado pelo desejo de criar experiências digitais excelentes, sou <b>Gabriel Brandão</b> , programador front-end com foco em React.js.
Minha missão é transformar ideias em interfaces eficientes e agradáveis que facilitem a vida das pessoas e gerem um impacto positivo no mundo digital.
Com entusiasmo e dedicação, busco aprimorar minhas habilidades continuamente, explorando as últimas tendências e tecnologias para oferecer soluções inovadoras e personalizadas.
Acredito no poder da tecnologia para resolver problemas e aproximar pessoas.
</p>

<div className=' mt-3 '>

<b className=" text-xl">Links para contato:</b>

<div className="flex mt-2 flex-wrap gap-1 justify-center w-screen500:justify-start"> 

<Link className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-w-[150px] max-h-10 border-gray-500 border' 
href='https://www.linkedin.com/in/gabriel-brand%C3%A3o-42174223a/'>
<FaLinkedin className=' mr-[2px] text-xl'/>Linkedin</Link>

<Link className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-w-[150px] max-h-10 border-gray-500 border' 
href='https://github.com/Gabriel372'>
<FaGithub className=' mr-[2px] text-xl'/>Github</Link>

<Link className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-w-[150px] max-h-10 border-gray-500 border' 
 href='https://whatsa.me/5521973766911/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portfolio!'>
<IoLogoWhatsapp className=' mr-[2px] text-xl'/>
WhatsApp</Link>

</div>

</div>

</div>

</section>
</motion.div>
)    
}

export default AboutMe

