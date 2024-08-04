import Axios from "axios"

export default Axios.create({baseURL: "https://oiivmtdqbzlfgwhcrrxs.supabase.co/rest/v1/",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "****API_KEY_HERE****",
    },})