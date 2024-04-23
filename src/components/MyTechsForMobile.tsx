import { useState  } from "react"
import { Ttech } from "@/types/Types"
import Image from 'next/image'
import ReactImg from '../images/react3d.webp'
import TypescriptImg from '../images/ts3d.webp'
import NextImg from '../images/next.png'
import TailwindImg from '../images/tailwind.webp'
import BootstrapImg from '../images/bs3d.webp'
import JavascriptImg from '../images/js3d.webp'
import CssImg from '../images/css3d.png'
import Htmlimg from '../images/html3d.png'
import GitImg from '../images/git3d.webp'
import FirebaseImg from '../images/firebaseLogo.png'
import { ReactText,TypescriptText,NextText,TailwindText,CssText,HtmlText,GitText,GithubText,FirebaseText,BoostrapText,JavascriptText } from './Content'

function MyTechsForMobile() {
    const StyleForLi = 'cursor-pointer flex flex-col rounded-t-xl px-2 pb-1  shadow-3xl border ml-3 bg-gray-200 border-x-gray-300 border-t-gray-300 border-b-gray-300 w-screen550:text-sm w-screen550:ml-1 w-screen450:text-[11px] w-screen550:px-[2px]' 
const StyleForImg = 'max-w-14 w-screen500:max-w-10'
    const [TechClicked,setTechClicked] = useState<Ttech>({group1:'react',group2:'javascript'})

function ReturnTextForGroup1() {
return (TechClicked.group1 === 'react' && ReactText) ||
(TechClicked.group1 === 'typescript' && TypescriptText) ||
(TechClicked.group1 === 'next' && NextText) ||
 (TechClicked.group1 === 'tailwind' && TailwindText) ||
(TechClicked.group1 === 'bootstrap' && BoostrapText)
}

function ReturnTextForGroup2() {
    return (TechClicked.group2 === 'javascript' && JavascriptText) ||
    (TechClicked.group2 === 'css' && CssText) ||
    (TechClicked.group2 === 'html' && HtmlText) ||
     (TechClicked.group2 === 'git' && GitText) ||
    (TechClicked.group2 === 'firebase' && FirebaseText)
}



return (
<section className=' mt-4 mb-10 hidden w-screen1050:flex flex-col'>
 <h3 className=' text-3xl text-center mb-6'>Tecnologias que utilizo</h3>
        
<div className=' flex flex-col w-full items-center'>
        
<ul className=' flex  flex-row'>
        
<li className={`${StyleForLi} ${TechClicked.group1 === 'react' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'} `} 
onClick={()=> setTechClicked((prev)=>({...prev,group1:'react'})) }><b className=''
 >React js</b>
<Image src={ReactImg} alt='image'   className={`${StyleForImg}`}/>
</li>
        
 <li className={`${StyleForLi} ${TechClicked.group1 === 'typescript' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group1:'typescript'})) }><b>Typescript</b>
<Image src={TypescriptImg} alt='image'  className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked.group1 === 'next' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`}
onClick={()=> setTechClicked((prev)=>({...prev,group1:'next'})) }><b>Next js</b>
  <Image src={NextImg} alt='image'  className={`${StyleForImg}`}/></li>
        
   <li className={`${StyleForLi} ${TechClicked.group1 === 'tailwind' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group1:'tailwind'})) }><b>Tailwind</b>
<Image src={TailwindImg} alt='image'   className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked.group1 === 'bootstrap' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group1:'bootstrap'})) }><b>Bootstrap</b>
<Image src={BootstrapImg} alt='image' className={`${StyleForImg}`}/></li>
        
</ul>

<p className='max-w-[500px]  bg-white shadow-3xl border ml-3 rounded-b-xl text-lg p-1 w-full border-x-gray-300 border-b-gray-300 border-t-0 pt-2 min-h-[240px] mb-3'>
 {`${ReturnTextForGroup1()}`}   
</p>

<ul className=' flex  flex-row'>

<li className={`${StyleForLi} ${TechClicked.group2 === 'javascript' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group2:'javascript'})) }><b>Javascript</b>
 <Image src={JavascriptImg} alt='image'   className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked.group2 === 'css' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group2:'css'})) }><b>Css 3</b>
<Image src={CssImg} alt='image'  className={`${StyleForImg}`}/></li>
        
 <li className={`${StyleForLi} ${TechClicked.group2 === 'html' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group2:'html'})) } ><b>Html 5</b>
 <Image src={Htmlimg} alt='image' className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked.group2 === 'git' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group2:'git'})) } ><b>Git/Github</b>
<Image src={GitImg} alt='image' className={`${StyleForImg}`}/></li>
        
 <li className={`${StyleForLi} ${TechClicked.group2 === 'firebase' ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked((prev)=>({...prev,group2:'firebase'})) } ><b>Firebase</b>
 <Image src={FirebaseImg} alt='image' className={`${StyleForImg}`}/></li>

</ul>
    
 <p className='max-w-[500px]  bg-white shadow-3xl border ml-3 rounded-b-xl text-lg p-1 w-full border-x-gray-300 border-b-gray-300 border-t-0 pt-2 min-h-[240px]'>
 {`${ReturnTextForGroup2()}`}   
{TechClicked.group2 === 'git' && <p>{GithubText}</p> } 
</p>
        
</div>
        
 </section>
        
        )   
}

export default MyTechsForMobile
