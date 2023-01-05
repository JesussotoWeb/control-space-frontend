import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import Dashboard from "../controlSpace/pages/dashboard";
import Buscar from "../controlSpace/pages/Buscar";

export const DashboardRauter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="dashboard" element={<Dashboard />}/>
                <Route path="buscar" element={<Buscar />}/>
                <Route path="*" element={<Dashboard />}/>
            </Routes>
        </>
    )
}