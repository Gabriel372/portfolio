import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export type Ttech = {
group1:string
group2:string
}
export type TmodalProject = {
IsOpen:boolean
img:StaticImageData | string
}
export type TstateModalProject = {
Modal:TmodalProject;
setModal: React.Dispatch<React.SetStateAction<TmodalProject>>;
}
export type  Props = {
children:ReactNode
}
export type TstateTheme= {
ThemeIsDark:boolean
setThemeIsDark:React.Dispatch<React.SetStateAction<boolean>>; 
}



