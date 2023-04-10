import axios from "axios"

let server = "http://192.168.1.13:4000"

let FetchData = {}

const entities = await axios.get(server + "/api/entities")
FetchData.getEntities = entities.data

const treatments = await axios.get(server + "/api/treatment")
FetchData.getTreatments = treatments.data

const doctors = await axios.get(server + "/api/usersEmployee")
FetchData.getDoctors = doctors.data

export default FetchData
