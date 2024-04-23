import Image from "next/image"
import imgProfile from '../images/imgProfile.jpeg'
import { useState ,useEffect } from "react"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function AboutMeForTablet() {
    const [CursorIsVisible,setCursorIsVisible] = useState(false)
   
    useEffect(()=>{
        const Interval =  setInterval(()=>setCursorIsVisible((prev)=>!prev),700);  
        return ()=> clearInterval(Interval)
        },[])   


    return (<section className=" w-full justify-evenly mb-7 mt-5 w-screen900:flex hidden">


    
    
    <div className=' flex justify-center flex-col max-w-[660px] w-full'>
    
    <div className="">
    <h2 className={`fontGameRetro  text-[40px] mb-2`}>Programador</h2>
    
    <h2 className={`fontGameRetro text-end text-[45px] flex justify-end`}>Front end
    <span className={`${!CursorIsVisible && 'invisible'} bg-gray-600 h-14 w-1 inline`}></span>
    </h2>
    
    </div>
    

    <div className=" shadow-2xl rounded-tl-3xl rounded-br-3xl animate-float flex w-full justify-center"> 
    <div className="  overflow-hidden rounded-tl-3xl rounded-br-3xl max-h-[250px]">
        <Image src={imgProfile} alt='image' height={400} className=""/>
    </div>
    </div>

    <p className=" text-xl text-center mt-6">Oi meu nome é <b>Gabriel Brandão</b> sou programador Front end React js
    Gosto de tecnologia e ver o resultado do meu trabalho gerar uma boa experiência a cada usuário e facilitando sua vida.</p>
    
    <div className=' mt-3 '>
    
    <b className="">Link para meus contatos:</b>
    
    <div className="flex flex-row justify-around mt-2">
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

export default AboutMeForTablet
