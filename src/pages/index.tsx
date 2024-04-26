import { Inter } from "next/font/google";
import MyProjects from "@/components/MyProjects";
import MyTechs from "@/components/MyTechs";
import AboutMe from "@/components/AboutMe";
import MyTechsForMobile from "@/components/MyTechsForMobile";
// import MyContextProvider from "@/context/MyContext";
import { MyContextProvider } from "@/context/MyContext";

const inter = Inter({ subsets: ["latin"] });

function Home() {

  return (<main className=" px-2">
<div className=" max-w-6xl m-auto flex flex-col min-h-[95vh] h-full justify-around ">
<AboutMe/>
<MyTechs/>
<MyTechsForMobile/>
<MyProjects/>
</div>
</main>
  )
}

export default Home
