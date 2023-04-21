
//icons
import consulta from "../../assets/consulta.svg";
import menu_entidad from "../../assets/menu-entidad.svg";
import SignOut from "../../assets/SignOut.svg";

const menuOptions = [
    [consulta, "Consultas", "/results/:id/consult"],
    [menu_entidad, "Entidades", "/results/:id/entities"],
    [SignOut, "salir"],
];

export default menuOptions