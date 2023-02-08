import axios from "axios";

export default async function postMessages(author, text) {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/messages`, null, { params: {
        author, 
        text
    }});
}
