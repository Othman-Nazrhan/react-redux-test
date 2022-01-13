import axios from "axios";



export const  getAll = () => {
    axios.get("https://jsonplaceholder.typicode.com/users");
}