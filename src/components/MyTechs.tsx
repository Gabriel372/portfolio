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
import FirebaseImg from '../images/firebaseLogo.webp'
import { useState,useContext  } from "react"
import { ReactText,TypescriptText,NextText,TailwindText,CssText,HtmlText,GitText,GithubText,FirebaseText,BoostrapText,JavascriptText } from './Content'
import { MyContext } from '@/context/MyContext'
import { TstateTheme } from '@/types/Types'

function MyTechs() {
    const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
const [TechClicked,setTechClicked] = useState<string>('react') ;

const StyleForLi = 'cursor-pointer flex flex-col rounded-t-xl px-2 pb-1  shadow-2xl border ml-3 '
const ThemeForComponent = ThemeIsDark ? 'text-white bg-gray-800 duration-500 bg-gray-500 border-x-gray-500  border-b-gray-700'
:'duration-500 bg-white  from-gray-600 to-white bg-gray-200 border-x-gray-300 border-t-gray-300 border-b-gray-300'

function CatchTechGiveStyle (tech:string ){
    if (ThemeIsDark) {
    return (tech === TechClicked ? 'bg-gray-800 border-b-0 ' : 'bg-gray-900  border-gray-500 border-b-gray-500' ) 
    }
    else {
    return (tech === TechClicked ? 'bg-white border-b-0 border-x-gray-300 border-t-gray-500' : 'bg-gray-200  border-b-gray-300' ) 
    }
    }


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
<section className=' mt-4 mb-10 w-screen1050:hidden'>
<h3 className=' text-3xl text-center mb-6'>Tecnologias que utilizo</h3>

<div className=' flex flex-col w-full items-center'>

<ul className=' flex  flex-row '>

<li className={`${StyleForLi} ${CatchTechGiveStyle('react')}`} 
onClick={()=>setTechClicked('react')}><b className=''
>React js</b>
<Image src={ReactImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('typescript')} `} 
onClick={()=>setTechClicked('typescript')}><b>Typescript</b>
<Image src={TypescriptImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('next')}`}
 onClick={()=>setTechClicked('next')}><b>Next js</b>
<Image src={NextImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('tailwind')}`} 
onClick={()=>setTechClicked('tailwind')}><b>Tailwind</b>
<Image src={TailwindImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('bootstrap')}`} 
onClick={()=>setTechClicked('bootstrap')}><b>Bootstrap</b>
<Image src={BootstrapImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('javascript')}`} 
onClick={()=>setTechClicked('javascript')}><b>Javascript</b>
<Image src={JavascriptImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('css')}`} 
onClick={()=>setTechClicked('css')}><b>Css 3</b>
<Image src={CssImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('html')}`}
 onClick={()=>setTechClicked('html')}><b>Html 5</b>
<Image src={Htmlimg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('git')}`} 
onClick={()=>setTechClicked('git')}><b>Git/Github</b>
<Image src={GitImg} alt='image' height={70}  className=" "/></li>

<li className={`${StyleForLi} ${CatchTechGiveStyle('firebase')}`} 
onClick={()=>setTechClicked('firebase')}><b>Firebase</b>
<Image src={FirebaseImg} alt='image' height={70}  className=" "/></li>
</ul>

<p className={`${ThemeForComponent} duration-500 max-w-[1020px]  shadow-2xl border ml-3 rounded-b-xl text-lg p-1 w-full border-x-gray-300 border-b-gray-300 border-t-0 pt-2 min-h-[150px]`}>
{`${ReturnText()}`}   
 {TechClicked === 'git' && <p>{GithubText}</p> } 
</p>

</div>

</section>

)    
}

export default MyTechs
