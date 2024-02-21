import axios from "axios";

async function getDataTable() {
    const response = await axios.get("http://localhost:3000/participants")
    return response.data
}

export default getDataTable
