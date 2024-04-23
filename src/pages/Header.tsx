import Link from "next/link"
import style from './Header.module.css'
import BtnToggleMode from "@/components/BtnToggleMode"
// import Navbar from "./Navbar"

// import Login from "@/pages/Login"
// import Todo from "@/pages/Todo"


function Header() {
    
return (<header className="bg-gradient-to-b from-gray-600 to-white">
<nav className=" flex justify-around w-full h-16 items-center ">
    <BtnToggleMode/>
    {/* <Link href="/" ><span className=" ">Home</span></Link>
    <Link href="/Todo"><span className="">Todo</span></Link>  */}
    </nav>


</header>)

}

export default Header
