import axios from "axios";

export default async function postNumber(number) {
    return axios.post(`http://localhost:3000/api/numbers`, null, { params: {
        number
    }});
}
