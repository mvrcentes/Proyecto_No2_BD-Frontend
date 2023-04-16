//components
import CardInfoPatient from "./cardInfoPatient/CardInfoPatient"

import "./CreateInfoCardView.css"

const CreateInfoCardView = ({ options }) => {
    options = {
        medicamentos: ["Sopripren", "Z20", "Vitamina D"],
        laboratorios: ["Sopripren", "Z20", "Vitamina D"],
        nota: "Lorem ipsum dolor sit amet consectetur adipiscing elit, at sem aenean sociosqu feugiat ultricies, gravida natoque molestie lectus ligula vitae. A pellentesque libero ullamcorper dictumst dignissim etiam, rutrum risus egestas viverra. Enim est vitae proin rutrum himenaeos fusce netus, aliquet dapibus nec auctor per euismod vel, erat porttitor aenean natoque malesuada cubilia. Platea ultrices phasellus accumsan maecenas quisque cum hac ut, nec torquent massa netus laoreet rhoncus purus aliquam, nostra dapibus tristique sed duis congue leo. Integer netus tempus bibendum phasellus facilisis tortor sapien, ultrices molestie gravida ad magna non mollis, nisi torquent tellus himenaeos iaculis eu. Blandit scelerisque torquent enim dignissim potenti himenaeos, interdum quisque aptent nunc vel mus, vulputate dictum porttitor rhoncus justo.",
    }

    return (
        <div className="fondo-container">
            <div className="row-container">
                <CardInfoPatient
                    title="Doctor"
                    options={options.medicamentos}
                    note={options}
                    type={false}
                />
                <CardInfoPatient
                    title="Institucion"
                    options={options.laboratorios}
                    type={false}
                />

                <CardInfoPatient
                    title="Institucion"
                    options={options.laboratorios}
                    type={false}
                />
            </div>
            <CardInfoPatient title="Nota" note={options.nota} type={true} />
        </div>
    )
}

export default CreateInfoCardView
