import { TstateModalProject } from "@/types/Types"
import Image from "next/image"
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { modal } from "@/components/AnimationMotion";
import { MyContext } from "@/context/MyContext";
import { useContext } from "react";
import style from './ModalProject.module.css'

function ModalProject() {
   const {Modal,setModal} = useContext(MyContext) as TstateModalProject ;

return (<>
{Modal.IsOpen && 
<motion.div onClick={()=>setModal({IsOpen:false,img:''})}
   className={`${style.containerMod}`} 
   variants={modal}
   initial="hidden"
   animate="visible"
   exit="exit">

<div className={` ${style.divScroll}`}>

   <div className={`${style.dadSquare}`}   >
<p className={` ${style.btnCloseMod}`}> <IoClose/></p>
<Image onClick={(e)=> e.stopPropagation()} src={Modal.img} alt="imagem"
className={` ${style.squareMod}`}/>
</div>

</div>
</motion.div>
}
</>


)    

}

export default ModalProject
