import SidebarPanel from "../components/SidebarPanel";
import DetallesRegistro from "../components/modales/DetallesRegistro";
const Buscar = () => {
  return (
    <div className='dashboard'>
        <SidebarPanel />
        <div>
            <DetallesRegistro />
        </div>
    </div>
  )
}

export default Buscar;