import Image from "next/image"
import imgProfile from '../images/imgProfile.jpeg'
import { useState ,useEffect } from "react"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function AboutMe() {
const [CursorIsVisible,setCursorIsVisible] = useState(false)

useEffect(()=>{
const Interval =  setInterval(()=>setCursorIsVisible((prev)=>!prev),700);  
return ()=> clearInterval(Interval)
},[])


return (<section className=" flex w-full justify-evenly mb-7 mt-5 w-screen800:mb-0">

<div className="rounded-tl-3xl rounded-br-3xl animate-float w-screen900:hidden"> 
<div className="  overflow-hidden rounded-tl-3xl rounded-br-3xl max-h-[350px] shadow-2xl">
    <Image src={imgProfile} alt='image' height={500} className=""/>
</div>
</div>


<div className=' flex justify-center flex-col max-w-[660px] w-full'>

<div className="  mb-2 w-screen900:mb-0">
<h2 className={`fontGameRetro  text-[40px] mb-2 w-screen800:text-[35px] w-screen450:text-[6vw] `}>Programador</h2>

<h2 className={`fontGameRetro text-end text-[45px] flex justify-end w-screen800:text-[40px] w-screen450:text-[7vw] `}>Front end
<span className={`${!CursorIsVisible && 'invisible'} bg-gray-600 h-14 w-1 inline`}></span>
</h2>

</div>


<div className="  rounded-tl-3xl rounded-br-3xl animate-float hidden w-screen900:flex justify-center"> 
<div className="  overflow-hidden rounded-tl-3xl rounded-br-3xl max-h-[310px] shadow-2xl">
    <Image src={imgProfile} alt='image'  height={500} className=" "/>
</div>
</div>

<p className=" text-xl text-center mt-6">Oi meu nome é <b>Gabriel Brandão</b> sou programador Front end React js
Gosto de tecnologia e ver o resultado do meu trabalho gerar uma boa experiência a cada usuário e facilitando sua vida.</p>

<div className=' mt-3 '>

<b className="">Link para meus contatos:</b>

{/* <div className="flex flex-row justify-around mt-2"> */}
{/* <div className="grid mt-2 grid-cols-3 gap-x-1"> */}
<div className="flex mt-2 flex-wrap gap-1 justify-center w-screen500:justify-start"> 

<Link className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-w-[150px] max-h-10' 
href='https://www.linkedin.com/in/gabriel-brand%C3%A3o-42174223a/'>
<FaLinkedin className=' mr-[2px] text-xl'/>Linkedin</Link>

<Link className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-w-[150px] max-h-10' 
href='https://github.com/Gabriel372'>
<FaGithub className=' mr-[2px] text-xl'/>Github</Link>

<Link className=' bg-black text-white rounded-lg px-2 flex flex-row items-center py-2 justify-center w-full hover:bg-gray-700 max-w-[150px] max-h-10' 
 href='https://whatsa.me/5521973766911/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portfolio!'>
<IoLogoWhatsapp className=' mr-[2px] text-xl'/>
WhatsApp</Link>

</div>

</div>


</div>

</section>)    
}

export default AboutMe

