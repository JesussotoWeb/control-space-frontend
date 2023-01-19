import ContadorUsuario from "../components/ContadorUsuario";
import FormsRegistro from "../components/Forms/FormsRegistro";
import SidebarPanel from "../components/SidebarPanel";

const Registrar = () => {
    return (
        <div className='dashboard'>
            <SidebarPanel />
            <div className="dashboard__area">
              <ContadorUsuario />
              <FormsRegistro />
            </div>
        </div>
      )
}

export default Registrar;