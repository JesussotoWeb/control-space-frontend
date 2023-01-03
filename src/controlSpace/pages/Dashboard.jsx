import ContadorUsuario from "../components/ContadorUsuario";
import EstatusRegistros from "../components/EstatusRegistros";
import PagosPendientes from "../components/PagosPendientes";
import SidebarPanel from "../components/SidebarPanel";

function Dashboard() {
  return (
    <div className='dashboard'>
        <SidebarPanel />
        <div className="dashboard__area">
          <ContadorUsuario />
          <EstatusRegistros />
          <PagosPendientes />
        </div>
    </div>
  )
}

export default Dashboard;