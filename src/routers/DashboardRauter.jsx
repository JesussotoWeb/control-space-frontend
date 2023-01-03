import { Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import Dashboard from "../controlSpace/pages/dashboard"

export const DashboardRauter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="dashboard" element={<Dashboard />}/>
            </Routes>
        </>
    )
}