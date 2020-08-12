import Axios from "axios";

const fetchAPI = (endPoint, method = "GET", data ) => {
    return Axios({
        url:  "http://localhost:2000/"+endPoint,
        method,
        data
    }).catch(e => console.log(e))
}
export default fetchAPI;