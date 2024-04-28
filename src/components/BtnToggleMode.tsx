import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import {useContext, useEffect} from "react";
import { TstateTheme } from "@/types/Types";
import { MyContext } from "@/context/MyContext";

function BtnToggleMode() {
const {ThemeIsDark,setThemeIsDark} = useContext(MyContext) as TstateTheme ;
const ActualThemeIsDark = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ActualThemeIsDark') || 'null') : null;
const ThemeForBtn = ThemeIsDark ? 'text-white duration-1000 ': 'text-black duration-1000 '  

useEffect(()=>{
setThemeIsDark(ActualThemeIsDark);
})

function ToggleTheme() {
localStorage.setItem('ActualThemeIsDark',`${!ThemeIsDark}`);
setThemeIsDark(!ThemeIsDark) ;
}

return ( <button onClick={ToggleTheme} className={`${ThemeForBtn }`}>
 {ThemeIsDark ?
<IoIosSunny className=" text-[2.2rem]"/> : <FaMoon className=" text-[1.5rem]"/> }
</button> 
)

}

export default BtnToggleMode
