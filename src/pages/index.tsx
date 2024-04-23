import Image from "next/image";
import { Inter } from "next/font/google";
import MyProjects from "@/components/MyProjects";
import MyTechs from "@/components/MyTechs";
import AboutMe from "@/components/AboutMe";
import AboutMeForTablet from "@/components/AboutMeForTablet"
import MyTechsForMobile from "@/components/MyTechsForMobile";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
<main className=" px-1">

<div className=" max-w-6xl m-auto flex flex-col min-h-[95vh] h-full justify-around ">
{/* MYCONTEXT PROVIDER */}

<AboutMe />
{/* <AboutMeForTablet/> */}
<MyTechs/>
<MyTechsForMobile/>
<MyProjects/>


</div>





{/* 


TECNOLOGIAS QUE UTILIZO */}

</main>

  )
}

export default Home
