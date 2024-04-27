import { TstateModalProject } from "@/types/Types"
import style from './ModalProject.module.css'
import Image from "next/image"
import { IoClose } from "react-icons/io5";


function ModalProject({Modal,setModal}:TstateModalProject) {

return (<>
{ Modal.IsOpen && <div onClick={()=>setModal({IsOpen:false,img:''})}
   className={`${style.containerMod} `} >

<div className={`${style.divScroll}`}>

<div className={`${style.dadSquare}`}>
<p className={`${style.btnCloseMod}`}> <IoClose/></p>
<Image onClick={(e)=> e.stopPropagation()} src={Modal.img} alt="imagem"
className={`${style.squareMod }`}/>

</div>

</div>

</div>

}

</>

)    
}

export default ModalProject
