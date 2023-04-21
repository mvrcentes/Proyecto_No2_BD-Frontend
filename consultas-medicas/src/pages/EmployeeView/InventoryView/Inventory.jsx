import EmployeeView from "../../../components/view/EmployeeView"

import "./Inventory.css"

import FetchData from "../../../components/fetchData/FetchData"
import { useState } from "react"
import SearchBar from "../../../components/searchBar/SearchBar"

const MiniCard_InventarioVacio = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.id_institucion}</span>
            <span className="queso">{tupla.nombre}</span>
            <span className="queso">{tupla.categoria}</span>
            <span className="queso">{tupla.descripcion}</span>
            <span className="queso">{tupla.cantidad_disp}</span>
            <span className="queso">{tupla.almacenamiento_max}</span>
        </div>
    )
}

const MiniCard_InventarioFULL = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.id_institucion}</span>
            <span className="queso">{tupla.nombre}</span>
            <span className="queso">{tupla.categoria}</span>
            <span className="queso">{tupla.descripcion}</span>
            <span className="queso">{tupla.cantidad_disp}</span>
            <span className="queso">{tupla.almacenamiento_max}</span>
            <span className="queso">{tupla.fecha_caducidad}</span>
        </div>
    )
}

const MiniCard_InventarioPorExpirar = ({ tupla }) => {
    return (
        <div className="miniCard">
            <span className="queso">{tupla.id_institucion}</span>
            <span className="queso">{tupla.nombre}</span>
            <span className="queso">{tupla.categoria}</span>
            <span className="queso">{tupla.descripcion}</span>
            <span className="queso">{tupla.cantidad_disp}</span>
            <span className="queso">{tupla.fecha_caducidad}</span>
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

const GenerarContenido = (texto, boton, user_institucion, filtro=0) => {
    console.log("GenerarContenido: " + boton)
    const finishTeacher = texto.filter(objeto => objeto.id_institucion == user_institucion)
    switch (boton) {
        case 1:
            return (
                // "ID Institución", "Institución", "Categoria", "Descripción", "Disponible", "Cant Max"
                <div className="contenido">
                    {finishTeacher.map((tupla) => (
                        <MiniCard_InventarioVacio tupla={tupla} />
                    ))}
                </div>
            )
        case 2:
            return (
                // "ID Institución", "Institución", "Categoria", "Descripción", "Disponible", "Cant Max"
                <div className="contenido">
                    {finishTeacher.map((tupla) => (
                        <MiniCard_InventarioPorExpirar tupla={tupla} />
                    ))}
                </div>
            )
        case 3:
            if(filtro == 0){ 
                return (
                    <div className="contenido">
                        {finishTeacher.map((tupla) => (
                            <MiniCard_InventarioFULL tupla={tupla} />
                        ))}
                    </div>
                )
            }
            else{
                const finishTeacher2 = texto.filter(objeto => (objeto.descripcion).toLowerCase().includes(filtro.toLowerCase()))
                return (
                    <div className="contenido">
                        {finishTeacher2.map((tupla) => (
                            <MiniCard_InventarioFULL tupla={tupla} />
                        ))}
                    </div>
                )
            }
        default:
            break;
    }
}

const Inventory = () => {
    const [texto, setTexto] = useState([])
    const [titulos, setTitulos] = useState([])
    const [boton, setBoton] = useState(null)
    const [search, setSearch] = useState("")

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
                setTexto([...FetchData.getInventory1])
                setTitulos(["ID Institución", "Institución", "Categoria", "Descripción", "Disponible", "Cant Max"])
                setBoton(1)
                break;
            case 2:
                setTexto([...FetchData.getInventory2])
                setTitulos(["ID Institución", "Institución", "Categoria", "Descripción", "Disponible", "Caducidad"])
                setBoton(2)
                break;
            case 3:
                setTexto([...FetchData.getInventory0])
                setTitulos(["ID Institución", "Institución", "Categoria", "Descripción", "Disponible", "Cant Max", "Caducidad"])
                setBoton(3)
                break;
            default:
                break;
        }
    }

    return (
        <EmployeeView>
            <div className="BODEGA">
                <div className="QueryButtonContainer">
                    <QueryButton titulo={'Inventario por acabarse'} no={1} />
                    <QueryButton titulo={'Inventario'} no={3} />
                    <QueryButton titulo={'Inventario por expirar'} no={2} />
                </div>
                <div className="ReportContainer">  
                    {boton === 3 && <SearchBar value={search} onChange={useSearch} />}            
                    {GenerarTitulo(titulos)}
                    {GenerarContenido(texto, boton, 2, search)} {/* METER EN EL 1 EL ID DE LA INSTITUCION DEL USUARIO */}
                </div>
            </div>
        </EmployeeView>
    )
}

export default Inventory
