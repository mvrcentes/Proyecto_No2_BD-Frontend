const RegisterCard = ({options}) => {
    return (
        <div className="registerCard">
            <div className="fila">
                {options.map((option) => (
                    <div className="text">{option}</div>
                ))}
            </div>
        </div>
    );
};

export default RegisterCard;
