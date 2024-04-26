import { TstateModalProject } from "@/types/Types"
// import './ModalProject.module.css'
import style from './ModalProject.module.css'
import Image from "next/image"
import { IoClose } from "react-icons/io5";


function ModalProject({Modal,setModal}:TstateModalProject) {
    const isBlack = false 


return (<>
{ Modal.IsOpen && <div onClick={()=>setModal({IsOpen:false,img:''})}
   className={` w-full h-full top-0 flex justify-center items-center   left-0 bg-custom-black py-2 fixed`} >


<div className={`${style.dadSquare}`}>
<p className={`${style.btnCloseMod}`}> <IoClose/></p>
<Image onClick={(e)=> e.stopPropagation()} src={Modal.img} alt="imagem"
className={`${style.squareMod }`}/>

</div>





</div>

}



</>


)    
}

export default ModalProject
