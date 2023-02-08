import axios from "axios";

export default async function postNumber(number) {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/numbers`, null, { params: {
        number
    }});
}
