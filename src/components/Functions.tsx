import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiSwiper,
  SiNextdotjs,
  SiMongodb,
  SiSocketdotio,
} from "react-icons/si";
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TstateTheme } from "@/types/Types";

export function ReturnIconsTech(projectName: string) {
  const StyleForTechs =
    " pb-1 px-1 rounded-lg flex flex-row max-w-26 items-center";
  const { ThemeIsDark } = useContext(MyContext) as TstateTheme;
  const ThemeForTech = ThemeIsDark ? "bg-slate-900" : "bg-gray-200";

  if (projectName === "Catálogo de produtos") {
    return (
      <div className="mt-4 flex flex-wrap text-lg gap-1">
        <b className="">Tecnologias utilizadas:</b>
        <span className={`${StyleForTechs} ${ThemeForTech} `}>
          <FaReact className=" mr-[2px]" /> React Js
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTypescript className=" mr-[2px]" /> Typescript
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTailwindcss className=" mr-[2px]" /> Tailwind
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiFramer className=" mr-[2px] " /> Framer motion
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiFirebase className=" mr-[2px]" /> Firebase
        </span>
      </div>
    );
  } else if (projectName === "FalaTú") {
    return (
      <div className="mt-4 flex flex-wrap text-lg gap-1">
        <b className="">Tecnologias utilizadas:</b>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <FaReact className=" mr-[2px]" />
          Next Js
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTypescript className=" mr-[2px] " /> Typescript
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTailwindcss className=" mr-[2px]" /> Tailwind
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <FaNodeJs className=" mr-[2px]" /> Express js
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiMongodb className=" mr-[2px]" /> Mongo Db
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiSocketdotio className=" mr-[2px]" /> Socket io
        </span>
      </div>
    );
  } else if (projectName === "Cadastrador de membros") {
    return (
      <div className="mt-4 flex flex-wrap text-lg gap-1">
        <b className="">Tecnologias utilizadas:</b>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <FaReact className=" mr-[2px]" /> React Js
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTypescript className=" mr-[2px] " /> Typescript
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <FaCss3Alt className=" mr-[2px]" /> Css
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiFirebase className=" mr-[2px]" /> Firebase
        </span>
      </div>
    );
  } else if (projectName === "Best car") {
    return (
      <div className="mt-4 flex flex-wrap text-lg gap-1">
        <b className="">Tecnologias utilizadas:</b>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiNextdotjs className=" mr-[2px]" /> Next Js
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTypescript className=" mr-[2px] " /> Typescript
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiTailwindcss className=" mr-[2px]" /> Tailwind
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiFramer className=" mr-[2px] " /> Framer motion
        </span>
        <span className={`${StyleForTechs} ${ThemeForTech}`}>
          <SiSwiper className=" mr-[2px] " />
          Swiper
        </span>
      </div>
    );
  }
  return "";
}
