import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import Dashboard from "../controlSpace/pages/dashboard";
import Registros from "../controlSpace/pages/Registros";
import Registrar from "../controlSpace/pages/Registrar";
import VerUsuario from "../controlSpace/pages/VerUsuario";


export const DashboardRauter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="dashboard" element={<Dashboard />}/>
                <Route path="registrar" element={<Registrar />}/>
                <Route path="registros" element={<Registros />}/>
                <Route path="ver" element={<VerUsuario />}/>
                <Route path="*" element={<Dashboard />}/>
            </Routes>
        </>
    )
}