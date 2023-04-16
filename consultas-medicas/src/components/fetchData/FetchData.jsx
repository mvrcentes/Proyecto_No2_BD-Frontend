import axios from "axios"

const server = "http://192.168.1.13:4000"

let FetchData = {}

const patients = await axios.get(server + "/api/Patients")
FetchData.getPatients = patients.data


export const patientByDPI = async (dpi) => {
    console.log("PatientBYID", dpi)
    console.log("PatientBYID", (await axios.get(`${server}/api/Patients/${dpi}`)).data)
    console.log((await (axios.get(`${server}/api/Patients/${dpi}`))).data)
    try {
        return (await axios.get(`${server}/api/Patients/${dpi}`)).data
    } catch (error) {
        console.error(error)
    }
}

const entities = await axios.get(server + "/api/entities")
FetchData.getEntities = entities.data



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

const doctors = await axios.get(server + "/api/usersEmployee")
FetchData.getDoctors = doctors.data

// Treatments
export const getTreatmentsByDPI = async ( id ) => {
    try {
        return (await axios.get(`${server}/api/treatments/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}




export default FetchData
