import axios from "axios";

async function getNumber() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/numbers`);
}

export default  getNumber;
