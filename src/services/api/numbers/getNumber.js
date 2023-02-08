import axios from "axios";

export default async function getNumber() {
    return axios.get(`http://localhost:3000/api/numbers`);
}
