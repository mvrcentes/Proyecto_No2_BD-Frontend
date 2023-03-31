//funciones
import { Link } from 'react-router-dom';

//style
import './View.css'

//iconos
import menu_doctor from '../../assets/menu-doctor.svg'
import menu_entidad from '../../assets/menu-entidad.svg'
import signOut from '../../assets/SignOut.svg'


import EntityForm from "../AdminView/entityForm/EntityForm"
import CreateHospitalView from "../EntityView/EntityView/CreateEntityView"

const ButtonMenu = ({ icon, text }) => {
    return (
        <div className="buttonMenu">
            <div className="buttonMenuContainer">
                <img className="icon" src={icon}></img>
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

function View({menuOptions, tipo, children}) {
    return (
        <div className="view">
            <div className="menuView">
                <div className="menuViewContainer">
                    <Link to="/">
                        <h1>Logo</h1>
                    </Link>
                    {menuOptions.map((opcion, index) => (<ButtonMenu key={index} icon={opcion[0]} text={opcion[1]} />))}
                </div>
            </div>
            <div className="rightSide">
                <div className="fondo">
                    <div className={`fondoContainer ${tipo}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;
