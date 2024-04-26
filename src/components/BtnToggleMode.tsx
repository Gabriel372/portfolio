import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import {useContext, useEffect} from "react";
import { TstateTheme } from "@/types/Types";
import { MyContext } from "@/context/MyContext";


function BtnToggleMode() {
const {ThemeIsDark,setThemeIsDark} = useContext(MyContext) as TstateTheme ;
// const ActualThemeIsDark =  JSON.parse(localStorage.getItem('ActualThemeIsDark') || 'null')
const ActualThemeIsDark = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ActualThemeIsDark') || 'null') : null;


useEffect(()=>{
// CheckUserModeTheme() 
setThemeIsDark(ActualThemeIsDark);
},[])

function ToggleTheme() {
localStorage.setItem('ActualThemeIsDark',`${!ThemeIsDark}`);
setThemeIsDark(!ThemeIsDark) ;
}

// function CheckUserModeTheme() {
// if (typeof window !== "undefined") {
//     const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
// if (isDarkMode) {
// localStorage.setItem('ActualThemeIsDark',`${true}`);
// setThemeIsDark(true)
// } else {
//  localStorage.setItem('ActualThemeIsDark',`${false}`);
//  setThemeIsDark(false)
// }
//   }    
// }



return (<button onClick={ToggleTheme}>
 {ThemeIsDark ? <IoIosSunny className=" text-2xl"/> : <FaMoon />} 

</button>)

}

export default BtnToggleMode
