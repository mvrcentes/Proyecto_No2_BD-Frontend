//funciones
import { Link } from 'react-router-dom';

//iconos
import menu_doctor from '../../assets/menu-doctor.svg'
import menu_entidad from '../../assets/menu-entidad.svg'
import signOut from '../../assets/SignOut.svg'

//style
import './View.css'


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

function View({menuOptions}) {

    menuOptions = {
        //menu: [[icono, texto], [icono, texto]]
        menu: [[menu_doctor, "doctores"], [menu_entidad, "entidades"], [signOut, "salir"]]
    }

    return (
        <div className="view">
            <div className="menuView">
                <div className="menuViewContainer">
                    <Link to="/">
                        <h1>Logo</h1>
                    </Link>
                    {menuOptions.menu.map((opcion) => (<ButtonMenu icon={opcion[0]} text={opcion[1]} />))}
                </div>
            </div>
            <div className="rightSide">
                <div className="fondo">
                    <div className="fondoContainer">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;
