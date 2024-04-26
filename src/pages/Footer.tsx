import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TstateTheme } from "@/types/Types";

function Footer() {
    const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
    const ThemeForComponent = ThemeIsDark ? 'text-white bg-gray-800 duration-500':'duration-500 bg-gradient-to-t from-gray-600 to-white'
    
return (<footer className={`${ThemeForComponent} `}>
<nav className=" flex justify-around w-full h-16 items-center">
Gabriel Brandão 2024
    </nav>


</footer>)

}

export default Footer
