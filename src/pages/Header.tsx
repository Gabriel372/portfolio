import Link from "next/link"
import style from './Header.module.css'
import BtnToggleMode from "@/components/BtnToggleMode"
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TstateTheme } from "@/types/Types";


function Header() {
const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
const ThemeForComponent = ThemeIsDark ? 'text-white bg-gradient-to-t from-black to-gray-400 duration-1000 border-b-gray-800 border border-t-0 border-x-0':
'duration-1000 bg-gradient-to-b from-gray-600 to-white'

return (<header className={`${ThemeForComponent} transition `}>
<nav className=" flex justify-around w-full h-16 items-center">
    <BtnToggleMode/>
    </nav>

</header>)

}

export default Header
