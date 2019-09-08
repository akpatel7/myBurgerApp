import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-8e982.firebaseio.com/'
});

export default instance;