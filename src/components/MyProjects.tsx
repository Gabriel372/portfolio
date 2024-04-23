import CatalogProject from './CatalogProject';
import RegistMemberProject from './RegistMemberProject';


function MyProjects() {

// SIMULAR COM IMG TELA DE DESKTOP E MOBILE

//IMG:HOVER > CURSOR LUPA

// AO CLICAR NESSA SIMULACAO ABRE UM MODAL PARA EXPANDIR IMG


return (<section className=' flex flex-col justify-around mb-8'>
    <h4 className=' text-3xl text-center mb-6'>Meus projetos</h4>
{/* <ul className=' flex flex-row justify-around w-screen850:flex-col'> */}
<ul className=' grid grid-cols-2 w-screen850:grid-cols-1 justify-items-center gap-y-2'>


<CatalogProject/>
<RegistMemberProject/>

</ul>






</section>)

}

export default MyProjects
