//iconos
import menu_doctor from "../../assets/menu-doctor.svg"
import menu_entidad from "../../assets/menu-entidad.svg"
import signOut from "../../assets/SignOut.svg"
import report from "../../assets/report.svg"

const menuOptions = [
    [menu_doctor, "Médicos", "/adminviewdoctors"],
    [menu_entidad, "Instituciones", "/adminviewentities"],
    [report, "Reportes", "/adminviewreports"],
    [signOut, "Cerrar sesión", "/"],
]

export default menuOptions
