//view
import View from "../view/View";

//components
import EntityForm from "./entityForm/EntityForm"
import CreateHospitalView from "../EntityView/hospitalsView/CreateHospitalView"

//iconos
import menu_doctor from '../../assets/menu-doctor.svg'
import menu_entidad from '../../assets/menu-entidad.svg'
import signOut from '../../assets/SignOut.svg'

export default function AdminView() {
    const componentes = [EntityForm, CreateHospitalView]
    const menuOptions = [
        [menu_doctor, "doctores"], [menu_entidad, "entidades"], [signOut, "salir"]
    ]
    return <View menuOptions={menuOptions} tipo="row" componentes={componentes} />;
}
