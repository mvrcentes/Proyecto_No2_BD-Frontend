//view
import View from "../../../components/view/View"

//css
import "./AdminViewReports.css"

//sources
import menuOptions from "../../../components/AdminView/MenuOptions"

//fetch data
import FetchData from "../../../components/fetchData/FetchData"
import { useState } from "react"
import SearchBar from "../../../components/searchBar/SearchBar"


const MiniCard_r1 = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.enfermedad}</span>
            <span className="queso">{tupla.muertes_causadas}</span>
        </div>
    )
}

const MiniCard_r2 = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.num_colegiado_med}</span>
            <span className="queso">{tupla.medico}</span>
            <span className="queso">{tupla.pacientes_atendidos}</span>
        </div>
    )
}

const MiniCard_r3 = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.asistencias_medicas}</span>
            <span className="queso">{tupla.nombre}</span>
            <span className="queso">{tupla.estado}</span>
            <span className="queso">{tupla.telefono}</span>
            <span className="queso">{tupla.direccion}</span>
        </div>
    )
}

const MiniCard_r4 = ({ tupla }) => {
    console.log(" MINICARD_4 " + tupla)
    console.log(tupla)
    console.log(" MINICARD_4 " + tupla)
    return (
        <div className="miniCard">
            <span className="queso">{tupla.nombre}</span>
            <span className="queso">{tupla.num_serie}</span>
            <span className="queso">{tupla.categoria}</span>
            <span className="queso">{tupla.descripcion}</span>
            <span className="queso">{tupla.cantidad_disp}</span>
        </div>
    )
}

const MiniCard_r5 = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.nombre}</span>
            <span className="queso">{tupla.pacientes_atendidos}</span>
        </div>
    )
}

const GenerarTitulo = (titulos) => {
    return (
        <div className="titulos">
            {titulos.map((tupla) => (
                <span className="titulo">{tupla}</span>
            ))}
        </div>
    )
}

const GenerarContenido = (texto, boton, filtro = 0) => {
    console.log("textooooo")
    console.log(texto)
    console.log("textooo ")
    console.log("BOTON ====== " + boton)
    switch (boton) {
        case 1:
            return (
                <div className="contenido">
                    {texto.map((tupla) => (
                        <MiniCard_r1 tupla={tupla} />
                    ))}
                </div>
            )
        case 2:
            return (
                <div className="contenido">
                    {texto.map((tupla) => (
                        <MiniCard_r2 tupla={tupla} />
                    ))}
                </div>
            )
        case 3:
            return (
                <div className="contenido">
                    {texto.map((tupla) => (
                        <MiniCard_r3 tupla={tupla} />
                    ))}
                </div>
            )
        case 4:
            if(filtro == 0){ 
                return (
                    <div className="contenido">
                        {texto.map((tupla) => (
                            <MiniCard_r4 tupla={tupla} />
                        ))}
                    </div>
                )
            }
            else{
                const finishTeacher = texto.filter(objeto => (objeto.nombre).toLowerCase().includes(filtro))
                console.log("FINISH TEACHER")
                console.log(finishTeacher)
                console.log("FINISH TEACHER")
                return (
                    <div className="contenido">
                        {finishTeacher.map((tupla) => (
                            <MiniCard_r4 tupla={tupla} />
                        ))}
                    </div>
                )
            }
        case 5:
            return (
                <div className="contenido">
                    {texto.map((tupla) => (
                        <MiniCard_r5 tupla={tupla} />
                    ))}
                </div>
            )
        default:
            break;
    }
}

const AdminViewReports = () => {

    const [texto, setTexto] = useState([])
    const [titulos, setTitulos] = useState([])
    const [boton, setBoton] = useState(null)
    const [search, setSearch] = useState("")

    // useEffect(() => {
    //     {GenerarContenido(texto, boton, search)}
    // }, [search])

    // const [data, setData] = useState([])
    

    // useEffect(() => {
    //     async function fetchDat() {
    //         const report_4 = await report4(!search ? 1 : 1)
    //         setData(report_4.data) //aqui mandas a llamar a ea informacion y la asiganas a data
    //     }
    //     fetchDat()
    // },[])

    const QueryButton = ({ titulo, no }) => {
        return (
            <button className="QueryButton" no={no} onClick={() => handleClick(no)}>
                <h3>{titulo}</h3>
            </button>
        )
    }

    const useSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const handleClick = (identificador) => {
        console.log(identificador)
        setTexto("")
        setTitulos("")
        setBoton(null)
        switch (identificador) {
            case 1:
                setTexto([...FetchData.getReport1])
                setTitulos(["Enfermedad", "Muertes"])
                setBoton(1)
                break;
            case 2:
                setTexto([...FetchData.getReport2])
                setTitulos(["No. Colegiado", "Médico", "Pacientes atendidos"])
                setBoton(2)
                break;
            case 3:
                setTexto([...FetchData.getReport3])
                setTitulos(["Asistencias", "Nombre", "Estado", "Teléfono", "Dirección"])
                setBoton(3)
                break;
            case 4:
                setTexto([...FetchData.getReport4])
                setTitulos(["Nombre", "No. de serie", "Categoria", "Descripción", "Cantidad"])
                setBoton(4)
                break;
            case 5:
                setTexto([...FetchData.getReport5])
                setTitulos(["Nombre", "Pacientes atendidos"])
                setBoton(5)
                break;
            default:
                break;
        }
    }

    return (
        <View menuOptions={menuOptions} key={0} tipo='normal' >
            <div className="prueba-centrar">

                <div className="QueryButtonContainer">
                    <QueryButton titulo={'Top 10 enfermedades'} no={1} />
                    <QueryButton titulo={'Top 10 medicos'} no={2} />
                    <QueryButton titulo={'Top 5 pacientes'} no={3} />
                    <QueryButton titulo={'Reporte bodega'} no={4} />
                    <QueryButton titulo={'Top 3 instituciones'} no={5} />
                </div>
                <div className="ReportContainer">

                    {boton === 4 && <SearchBar value={search} onChange={useSearch} />}                          
                    {GenerarTitulo(titulos)}
                    {GenerarContenido(texto, boton, search)}
                </div>
            </div>
        </View>
    )
}

export default AdminViewReports
