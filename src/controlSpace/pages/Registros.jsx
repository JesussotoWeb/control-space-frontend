import ContadorUsuario from "../components/ContadorUsuario";
import SidebarPanel from "../components/SidebarPanel";
import TablaRegistros from "../components/TablaRegistros";

function Dashboard() {
  return (
    <div className='dashboard'>
        <SidebarPanel />
        <div className="dashboard__area">
          <ContadorUsuario />
          <TablaRegistros />
        </div>
    </div>
  )
}

export default Dashboard;