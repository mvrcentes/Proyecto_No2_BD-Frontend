//components
import RegisterCard from "../registerCard/RegisterCard";

//style
import "./CreateRegisterView.css";

//data
import registers from "../../fetchData/FetchData";

const CreateRegisterView = () => {
    return (
        <div className="createRegisterCard">
            {registers.map((register) => (
                <RegisterCard
                    key={register.id}
                    fecha={register.created_at}
                    nombreDoctor={register.nombre}
                    nombreHospital={register.direccion}
                />
            ))}
        </div>
    );
};

export default CreateRegisterView;