import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import { DashboardRauter } from "./DashboardRauter";

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/*" element={<DashboardRauter />}/>
            </Routes>
        </>
    )
}