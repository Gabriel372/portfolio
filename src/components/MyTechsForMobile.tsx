import { useState,useContext  } from "react"
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
import { MyContext } from "@/context/MyContext"
import { TstateTheme } from "@/types/Types"

function MyTechsForMobile() {
const StyleForLi = `cursor-pointer flex flex-col rounded-xl px-2 pb-1  shadow-2xl border   
w-screen550:text-sm  w-screen450:text-[11px] w-screen550:px-1 w-screen550:rounded-md justify-center items-center` 
const StyleForImg = 'max-w-14 w-screen500:max-w-10'
const [TechClicked,setTechClicked] = useState<string>('react')
const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
const ThemeForComponent = ThemeIsDark ? 'text-white bg-gray-800 duration-500  border-gray-700'
:'duration-500 bg-white  from-gray-600 to-white bg-gray-200 border-x-gray-300 border-t-gray-300 border-b-gray-300' ;

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
function CatchTechGiveStyle (tech:string ){
    if (ThemeIsDark) {
    return (tech === TechClicked ? 'bg-gray-700' : 'bg-gray-900  border-gray-500' ) 
    }
    else {
    return (tech === TechClicked ? 'bg-white border-b-0 ' : 'bg-gray-200  border-b-gray-300' ) 
    }
    }

return (
<section className=' mt-4 hidden w-screen1050:flex flex-col mb-2'>
 <h3 className=' text-3xl text-center mb-6'>Tecnologias que utilizo</h3>
        
<div className=' flex flex-col w-full items-center'>
        
<ul className=' flex  w-full justify-center flex-wrap gap-2 mb-2'>
        
<li className={`${StyleForLi} ${CatchTechGiveStyle('react')}`} 
onClick={()=> setTechClicked('react') }><b className=''
 >React js</b>
<Image src={ReactImg} alt='image'   className={`${StyleForImg}`}/>
</li>
        
 <li className={`${StyleForLi} ${CatchTechGiveStyle('typescript')}`} 
onClick={()=> setTechClicked('typescript') }><b>Typescript</b>
<Image src={TypescriptImg} alt='image'  className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${CatchTechGiveStyle('next')}`}
onClick={()=> setTechClicked('next') }><b>Next js</b>
  <Image src={NextImg} alt='image'  className={`${StyleForImg}`}/></li>
        
   <li className={`${StyleForLi} ${CatchTechGiveStyle('tailwind')}`} 
onClick={()=> setTechClicked('tailwind') }><b>Tailwind</b>
<Image src={TailwindImg} alt='image'   className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${CatchTechGiveStyle('bootstrap')}`} 
onClick={()=> setTechClicked('bootstrap') }><b>Bootstrap</b>
<Image src={BootstrapImg} alt='image' className={`${StyleForImg}`}/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('javascript')} `} 
onClick={()=> setTechClicked('javascript') }><b>Javascript</b>
 <Image src={JavascriptImg} alt='image'   className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${CatchTechGiveStyle('css')} `} 
onClick={()=> setTechClicked('css') }><b>Css 3</b>
<Image src={CssImg} alt='image'  className={`${StyleForImg}`}/></li>
        
 <li className={`${StyleForLi} ${CatchTechGiveStyle('html')}`} 
onClick={()=> setTechClicked('html') }><b>Html 5</b>
 <Image src={Htmlimg} alt='image' className={`${StyleForImg}`}/></li>
        
<li className={`${StyleForLi} ${CatchTechGiveStyle('git')}`} 
onClick={()=> setTechClicked('git') }><b>Git/Github</b>
<Image src={GitImg} alt='image' className={`${StyleForImg}`}/></li>
        
 <li className={`${StyleForLi} ${CatchTechGiveStyle('firebase')}`} 
onClick={()=> setTechClicked('firebase') }><b>Firebase</b>
 <Image src={FirebaseImg} alt='image' className={`${StyleForImg}`}/></li>       

</ul>

<p className={`${ThemeForComponent}   border rounded-xl text-lg p-1 w-full pt-2 min-h-[240px] mb-3 shadow-2xl mt-2'`}>
 {`${ReturnText()}`}   
 {TechClicked === 'git' && <p>{GithubText}</p> } 

</p>

<ul className=' flex  flex-row max-w-[500px] w-full justify-end'>

</ul>
      
</div>
        
 </section>
        
        )   
}

export default MyTechsForMobile
