import axios from "axios";

export default async function postMessages(author, text) {
    return axios.post(`http://localhost:3000/api/messages`, null, { params: {
        author, 
        text
    }});
}
