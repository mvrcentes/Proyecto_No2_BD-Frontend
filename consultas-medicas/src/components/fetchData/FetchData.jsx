import axios from "axios"

const server = "http://127.0.0.1:4000"

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

export const incidencesByID = async ( dpi, id ) => {
    try {
        return (await axios.get(`${server}/api/incidences/${dpi}/incidence/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}

export const postIncidence = async ( dpi, data ) => {
    try {
        return (await axios.post(`${server}/api/incidences/${dpi}`, data)).data
    } catch (error) {
        console.error(error)
    }
}


//Diseases
export const getDiseases = async () => {
    try {
        return (await axios.get(`${server}/api/diseases`)).data
    } catch (error) {
        console.error(error)
    }
}


// Treatments
export const getTreatmentsByDPI = async ( id ) => {
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

export const updateDoctor = async ( id, institucion ) => {
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




export default FetchData
