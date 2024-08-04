import Axios from "axios"
//Only provide a public API key for read access, no this is not bad practice. I checked.
export default Axios.create({baseURL: "https://oiivmtdqbzlfgwhcrrxs.supabase.co/rest/v1/",
    headers: {
        "Content-Type": "application/json",
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9paXZtdGRxYnpsZmd3aGNycnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MzU0MDEsImV4cCI6MjAzODMxMTQwMX0.WvqwtgrXKwrwE1n4PBfIfHpcdnbXTFJUAunXX2qaEuo",
    },})