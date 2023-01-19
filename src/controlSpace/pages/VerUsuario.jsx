import SidebarPanel from "../components/SidebarPanel";
import DetallesRegistro from "../components/modales/DetallesRegistro";
const VerUsuario = () => {
  return (
    <div className='dashboard'>
        <SidebarPanel />
        <DetallesRegistro />
    </div>
  )
}

export default VerUsuario;