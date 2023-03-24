import "./registerCard.css";

const RegisterCard = ({fecha, nombreDoctor, nombreHospital}) => {

    
    fecha = fecha.slice(0, fecha.indexOf("T"))
    
    return (
        <div className="register">
            <div className="fecha">{fecha}</div>
            <div className="nombreDoctor">{nombreDoctor}</div>
            <div className="nombreHospital">{nombreHospital}</div>
        </div>
    )
}

export default RegisterCard;
