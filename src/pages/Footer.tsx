import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TstateTheme } from "@/types/Types";

function Footer() {
    const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
    const ThemeForComponent = ThemeIsDark ? 'bg-gradient-to-b from-black to-gray-500 text-white duration-500 border-t-gray-800 ':'duration-500 bg-gradient-to-t from-gray-600 to-white border-t-0'
//const ThemeForComponent = ThemeIsDark ? 'text-white bg-gradient-to-t from-black to-gray-400 duration-700 border-b-gray-800 border border-t-0 border-x-0':'duration-800 bg-gradient-to-b from-gray-600 to-white'
    


return (<footer className={`${ThemeForComponent} border border-b-0 border-x-0`}>
<nav className=" flex justify-around w-full h-16 items-center">
Developed by Gabriel Brandão
    </nav>


</footer>)

}

export default Footer
