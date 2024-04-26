import Footer from "@/pages/Footer";
import Header from "../pages/Header";
import { useContext } from "react";
import { TstateTheme } from "@/types/Types";
import { MyContext } from "@/context/MyContext";

function Layout({ children }:any) {
  const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;
  const Theme = ThemeIsDark ? ' bg-black text-white duration-700' : 'bg-white text-black duration-700'

return (
<>
<main className={`${Theme} `}>
<Header/>
{children}
<Footer/>
</main>
</>
)
  }

export default Layout

