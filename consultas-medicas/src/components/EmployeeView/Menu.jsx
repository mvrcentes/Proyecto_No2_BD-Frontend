//iconos
import Consulta from "../../assets/consulta.svg";
import Reporte from "../../assets/reporte.svg";
import SignOut from "../../assets/SignOut.svg";
import Invent from "../../assets/bodega.svg";

const menuOptions = [
    [Consulta, "Pacientes", "/employeeViewPatients"],
    [Reporte, "Reportes", "/employeeViewReport"],
    [Invent, "Bodega", "/employeeViewInventory"],
    [SignOut, "Cerrar sesión", "/"],
]

export default menuOptions
