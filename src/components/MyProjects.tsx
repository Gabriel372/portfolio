import CatalogProject from './CatalogProject';
import RegistMemberProject from './RegistMemberProject';
import ModalProject from '@/modals/ModalProject';
import { useState } from 'react';
import Project from './Project';
import { useContext } from 'react';
import { MyContext } from '@/context/MyContext';
import { TstateModalProject } from '@/types/Types';
import { ListProjects } from '@/data/ListProjects';


function MyProjects() {
    const {Modal} = useContext(MyContext) as TstateModalProject ;

return ( <section className=' flex flex-col justify-around mb-8' >
 
    <h4 className=' text-3xl text-center mb-6'>Meus projetos</h4>

<ul className='flex flex-wrap  w-screen850:justify-center justify-around gap-8 w-screen800:gap-5'>
{ListProjects.map((item)=>( <Project item={item}/>))}
{/* <CatalogProject /> */}
{/* <RegistMemberProject Modal={Modal} setModal={setModal}/> */}

</ul>
<ModalProject/>

</section> 

)

}

export default MyProjects
