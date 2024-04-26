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
const StyleForLi = `cursor-pointer flex flex-col rounded-xl px-2 pb-1  shadow-2xl border   
w-screen550:text-sm  w-screen450:text-[11px] w-screen550:px-1 w-screen550:rounded-md justify-center items-center` 
const StyleForImg = 'max-w-14 w-screen500:max-w-10'
const [TechClicked,setTechClicked] = useState<string>('react')

// const [TechClicked,setTechClicked] = useState<Ttech>({group1:'react',group2:'javascript'})

// function ReturnTextForGroup1() {
// return (TechClicked.group1 === 'react' && ReactText) ||
// (TechClicked.group1 === 'typescript' && TypescriptText) ||
// (TechClicked.group1 === 'next' && NextText) ||
//  (TechClicked.group1 === 'tailwind' && TailwindText) ||
// (TechClicked.group1 === 'bootstrap' && BoostrapText)
// }

// function ReturnTextForGroup2() {
//     return (TechClicked.group2 === 'javascript' && JavascriptText) ||
//     (TechClicked.group2 === 'css' && CssText) ||
//     (TechClicked.group2 === 'html' && HtmlText) ||
//      (TechClicked.group2 === 'git' && GitText) ||
//     (TechClicked.group2 === 'firebase' && FirebaseText)
// }
function ReturnText() {
    return (TechClicked === 'react' && ReactText) ||
        (TechClicked === 'typescript' && TypescriptText) ||
        (TechClicked === 'next' && NextText) ||
        (TechClicked === 'tailwind' && TailwindText) ||
        (TechClicked === 'bootstrap' && BoostrapText) ||
        (TechClicked === 'javascript' && JavascriptText) ||
        (TechClicked === 'css' && CssText) ||
        (TechClicked === 'html' && HtmlText) ||
        (TechClicked === 'git' && GitText) ||
        (TechClicked === 'firebase' && FirebaseText)
    }


return (
<section className=' mt-4 hidden w-screen1050:flex flex-col mb-2'>
 <h3 className=' text-3xl text-center mb-6'>Tecnologias que utilizo</h3>
        
<div className=' flex flex-col w-full items-center'>
        
<ul className=' flex  w-full justify-center flex-wrap gap-2'>
        
<li className={`${StyleForLi} ${TechClicked === 'react' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('react') }><b className=''
 >React js</b>
<Image src={ReactImg} alt='image'   className={`${StyleForImg}`}/>
</li>
        
 <li className={`${StyleForLi} ${TechClicked === 'typescript' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('typescript') }><b>Typescript</b>
<Image src={TypescriptImg} alt='image'  className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked === 'next' ? 'bg-white border-black ': 'bg-gray-200  border-b-gray-300'}`}
onClick={()=> setTechClicked('next') }><b>Next js</b>
  <Image src={NextImg} alt='image'  className={`${StyleForImg}`}/></li>
        
   <li className={`${StyleForLi} ${TechClicked === 'tailwind' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('tailwind') }><b>Tailwind</b>
<Image src={TailwindImg} alt='image'   className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked === 'bootstrap' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('bootstrap') }><b>Bootstrap</b>
<Image src={BootstrapImg} alt='image' className={`${StyleForImg}`}/></li>

<li className={`${StyleForLi} ${TechClicked === 'javascript' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'} `} 
onClick={()=> setTechClicked('javascript') }><b>Javascript</b>
 <Image src={JavascriptImg} alt='image'   className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked === 'css' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'} `} 
onClick={()=> setTechClicked('css') }><b>Css 3</b>
<Image src={CssImg} alt='image'  className={`${StyleForImg}`}/></li>
        
 <li className={`${StyleForLi} ${TechClicked === 'html' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('html') }><b>Html 5</b>
 <Image src={Htmlimg} alt='image' className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${TechClicked === 'git' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('git') }><b>Git/Github</b>
<Image src={GitImg} alt='image' className={`${StyleForImg}`}/></li>
        
 <li className={`${StyleForLi} ${TechClicked === 'firebase' ? 'bg-white border-black ' : 'bg-gray-200  border-b-gray-300'}`} 
onClick={()=> setTechClicked('firebase') }><b>Firebase</b>
 <Image src={FirebaseImg} alt='image' className={`${StyleForImg}`}/></li>       

</ul>

<p className='  bg-white border rounded-xl text-lg p-1 w-full border-gray-200 pt-2 min-h-[240px] mb-3 shadow-2xl mt-2'>
 {`${ReturnText()}`}   
 {TechClicked === 'git' && <p>{GithubText}</p> } 

</p>

<ul className=' flex  flex-row max-w-[500px] w-full justify-end'>



</ul>
    
 {/* <p className='max-w-[500px]  bg-white shadow-3xl border rounded-b-xl text-lg p-1 w-full border-x-gray-300 border-b-gray-300 border-t-0 pt-2 min-h-[240px] shadow-2xl'>
 {`${ReturnTextForGroup2()}`}   
{TechClicked.group2 === 'git' && <p>{GithubText}</p> } 
</p> */}
        
</div>
        
 </section>
        
        )   
}

export default MyTechsForMobile
