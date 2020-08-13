import axios from "axios";

const fetchAPI = (endPoint, method = "GET", data ) => {
    return axios({
        url:  "http://localhost:4000/api"+endPoint,
        method,
        data
    }).catch(e => console.log(e))
}
export default fetchAPI;