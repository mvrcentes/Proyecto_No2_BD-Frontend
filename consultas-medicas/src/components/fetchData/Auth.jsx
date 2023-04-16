import axios from "axios"

const auth = {}

auth.signUp = await axios.post("http://localhost:4000/api/signup/signup")

auth.isActive = await axios.get("http://localhost:4000/api/signup/signup")

export default auth
