import { StaticImageData } from "next/image"

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
// export type Ttech = {
// tech:string
// text:string
// }
// export type = {
//     tech:string
    
//     }

