import axios from "axios";

let registers = [];

// const fetchData = async () => {
    const res = await axios.get("http://10.100.8.184:4000/api/hospitales");
    registers = res.data;
    console.log(registers);
// };

// fetchData();

export default registers;
