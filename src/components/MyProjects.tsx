import CatalogProject from './CatalogProject';
import RegistMemberProject from './RegistMemberProject';
import ModalProject from '@/modals/ModalProject';
import { TmodalProject } from '@/types/Types';
import { useState } from 'react';

function MyProjects() {
const [Modal,setModal] = useState<TmodalProject>({IsOpen:false,img:''})

return (<section className=' flex flex-col justify-around mb-8'>
 
    <h4 className=' text-3xl text-center mb-6'>Meus projetos</h4>
<ul className=' grid grid-cols-2 w-screen850:grid-cols-1 justify-items-center gap-y-2'>


<CatalogProject Modal={Modal} setModal={setModal} />
<RegistMemberProject Modal={Modal} setModal={setModal}/>

</ul>

<ModalProject Modal={Modal} setModal={setModal}/>
</section> 

)

}

export default MyProjects
