import axios from "axios";

export default async function getNumber() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/numbers`);
}
