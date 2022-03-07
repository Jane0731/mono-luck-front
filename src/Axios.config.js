import Axios from "axios"
const axios = (baseURL) => {
const instance = Axios.create({
baseURL: "https://mono-luck-back.herokuapp.com/",//back-end
headers: { 'Content-Type': 'application/json' },
timeout: 5000,
});
return instance;
}
export {axios};
export default axios();
