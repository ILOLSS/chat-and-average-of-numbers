import axios from "axios";

async function postNumber(number) {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/numbers`, null, { params: {
        number
    }});
}

postNumber.propTypes = {
    number: PropTypes.number.isRequired
};

export default postNumber;
