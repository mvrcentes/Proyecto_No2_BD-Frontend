import axios from "axios";

let registers = [];

// const fetchData = async () => {
    const res = await axios.get("http://192.168.1.6:4000/api/hospitales");
    registers = res.data;
// };

// fetchData();

export default registers;
