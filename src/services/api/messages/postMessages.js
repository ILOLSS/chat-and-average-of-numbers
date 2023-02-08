import axios from "axios";
import PropTypes from "prop-types";

async function postMessages(author, text) {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/messages`, null, { params: {
        author, 
        text
    }});
}

postMessages.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default postMessages;
