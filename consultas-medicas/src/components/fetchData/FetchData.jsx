import axios from "axios"

// const server = "http://127.0.0.1:4000"
const server = "http://192.168.0.2:4000"

let FetchData = {}

const patients = await axios.get(server + "/api/Patients")
FetchData.getPatients = patients.data


export const patientByDPI = async (dpi) => {
    try {
        return (await axios.get(`${server}/api/Patients/${dpi}`)).data
    } catch (error) {
        console.error(error)
    }
}

// const entities = await axios.get(server + "/api/entities")
// FetchData.getEntities = entities.data

export const getEntities = async () => {
    try {
        return (await axios.get(`${server}/api/entities`)).data
    } catch (error) {
        console.error(error)
    }
}

export const incidences = async (dpi) => {
    try {
        return (await axios.get(`${server}/api/incidences/${dpi}`)).data
    } catch (error) {
        console.error(error)
    }
}

export const incidencesByID = async (dpi, id) => {
    try {
        return (await axios.get(`${server}/api/incidences/${dpi}/incidence/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}

export const postIncidence = async (incidencia, dpi_paciente, num_colegiado, institucion, enfermedad, diagnostico, fecha) => {
    try {
        return (await axios.post(`${server}/api/incidences/${dpi_paciente}`,
            {
                incidencia, 
                dpi_paciente, 
                num_colegiado, 
                institucion, 
                enfermedad, 
                diagnostico, 
                fecha
            })).data
    } catch (error) {
        console.error(error)
    }
}

export const postTratamiento = async (id_tratamiento, id_incidencia, id_examen, id_cirugia, id_medicamento, evolucion, fecha, id_resultado) => {

    try {
        return (await axios.post(`${server}/api/treatments/${id_incidencia}`,
            {
                id_tratamiento,
                id_incidencia,
                id_examen,
                id_cirugia,
                id_medicamento,
                evolucion,
                fecha,
                id_resultado
            })).data
    } catch (error) {
        console.error(error)
    }

}

//Diseases
export const getDiseases = async () => {
    try {
        return (await axios.get(`${server}/api/diseases/`)).data
    } catch (error) {
        console.error(error)
    }
}


// Treatments
export const getTreatmentsByDPI = async (id) => {
    try {
        return (await axios.get(`${server}/api/treatments/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}

//----- Admin
export const getDoctors = async () => {
    try {
        return (await axios.get(`${server}/api/usersEmployee`)).data
    } catch (error) {
        console.error(error)
    }
}

export const updateDoctor = async (id, institucion) => {
    try {
        return (await axios.put(`${server}/api/usersEmployee/${id}`,
            {
                id,
                institucion
            })).data
    } catch (error) {
        console.error(error)
    }
}

export const addDoctor = async (colegiate_number, entity, name, phone, address, speciality) => {
    try {
        return (await axios.post(`${server}/api/usersEmployee/`,
            {
                colegiate_number,
                entity,
                name,
                phone,
                address,
                speciality
            })).data
    } catch (error) {
        console.error(error)
    }
}

export const addUser = async (username, password, rol_id, num_colegiado) => {
    try {
        return (await axios.post(`${server}/api/usersEmployeeUser/`,
            {
                username,
                password,
                rol_id,
                num_colegiado
            })).data
    } catch (error) {
        console.error(error)
    }
}

export const addEntity = async (id, name, address, phone, website, email, type) => {

    try {
        return (await axios.post(`${server}/api/entities/`,
            {
                id,
                type,
                name,
                address,
                email,
                phone,
                website,
            })).data
    } catch (error) {
        console.error(error)
    }

}

// REPORTES

const report1 = await axios.get(server + "/api/reports/1")
FetchData.getReport1 = report1.data

const report2 = await axios.get(server + "/api/reports/2")
FetchData.getReport2 = report2.data

const report3 = await axios.get(server + "/api/reports/3")
FetchData.getReport3 = report3.data

const report4 = await axios.get(server + "/api/reports/4")
FetchData.getReport4 = report4.data

const report5 = await axios.get(server + "/api/reports/5")
FetchData.getReport5 = report5.data

// Inventory
const inventory0 = await axios.get(server + "/api/inventory/0")
FetchData.getInventory0 = inventory0.data

const inventory1 = await axios.get(server + "/api/inventory/1")
FetchData.getInventory1 = inventory1.data

const inventory2 = await axios.get(server + "/api/inventory/2")
FetchData.getInventory2 = inventory2.data

export default FetchData
