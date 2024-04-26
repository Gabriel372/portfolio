import Link from "next/link"
import style from './Header.module.css'
import BtnToggleMode from "@/components/BtnToggleMode"
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TstateTheme } from "@/types/Types";

function Header() {
const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
const ThemeForComponent = ThemeIsDark ? 'text-white bg-neutral-800 duration-500':'duration-500 bg-gradient-to-b from-gray-600 to-white'



return (<header className={`${ThemeForComponent} dura`}>
<nav className=" flex justify-around w-full h-16 items-center ">
    <BtnToggleMode/>
    {/* <Link href="/" ><span className=" ">Home</span></Link>
    <Link href="/Todo"><span className="">Todo</span></Link>  */}
    </nav>

</header>)

}

export default Header
