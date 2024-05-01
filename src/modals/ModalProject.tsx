import { TstateModalProject } from "@/types/Types"
import style from './ModalProject.module.css'
import Image from "next/image"
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { pageVariantsModal,pageTransitionModal } from "@/components/AnimationMotion";


function ModalProject({Modal,setModal}:TstateModalProject) {

return (<>
{ Modal.IsOpen && <motion.div onClick={()=>setModal({IsOpen:false,img:''})}
   className={`${style.containerMod} `} 
    animate="in" 
   exit="out" 
   variants={pageVariantsModal} 
   transition={pageTransitionModal} >

<div className={`${style.divScroll}`}>

   <div className={`${style.dadSquare}`}    >
<p className={`${style.btnCloseMod}`}> <IoClose/></p>
<Image onClick={(e)=> e.stopPropagation()} src={Modal.img} alt="imagem"
className={`${style.squareMod }`}/>
</div>

</div>
</motion.div>
}
</>

)    

}

export default ModalProject
