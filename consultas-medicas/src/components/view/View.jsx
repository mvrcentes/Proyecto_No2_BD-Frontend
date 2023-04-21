//funciones
import { Link } from "react-router-dom";
import { useRolContext } from "../../contexts/RolProvider"
import logo2 from "../../assets/logo2.svg"

//style
import "./View.css";

const ButtonMenu = ({ icon, text, onClick }) => {
    return (
        <button className="buttonMenu" onClick={() => onClick()}> 
            <div className="buttonMenuContainer">
                <img className="icon" src={icon}></img>
                <div className="text">{text}</div>
            </div>
        </button>
    );
};

function View({ menuOptions, tipo, children }) {
    const { setRol } = useRolContext()

    const handleRol = () => {
        setRol(null)
    }

    return (
        <div className="view">
            <div className="menuView">
                <div className="menuViewContainer">
                    <Link to="/">
                        <img src={logo2}></img>
                    </Link>
                    {menuOptions.map((opcion, index) => (
                        <Link to={opcion[2]}>
                            <ButtonMenu
                                key={index}
                                icon={opcion[0]}
                                text={opcion[1]}
                                onClick={opcion[1] === "Cerrar sesión" ? handleRol : null}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="rightSide">
                <div className="fondo">
                    <div className={`fondoContainer ${tipo}`}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default View;
