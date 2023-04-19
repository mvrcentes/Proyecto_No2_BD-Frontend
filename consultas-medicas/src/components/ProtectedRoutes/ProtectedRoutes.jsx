import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ({ rol, needs, redirectTo="/login" }) => {
    if (rol !== needs) {
        return <Navigate to={redirectTo} />
    }

    return <Outlet />
}

export default ProtectedRoutes
