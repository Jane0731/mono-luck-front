import Axios from "axios"
const axios = (baseURL) => {
const instance = Axios.create({
baseURL: process.env.REACT_APP_BACK_END,//back-end
headers: { 'Content-Type': 'application/json' },
timeout: 5000,
});
return instance;
}
export {axios};
export default axios();
