import axios from "axios";

export default async function getNumber() {
    console.log(`${process.env.API_HOST}/numbers`);
    return axios.get(`http://localhost:3000/api/numbers`);
}
