import axios from "axios";
import { BACKEND_URL } from "../config";
import { Penguin } from "../interfaces";

class PenguinApi {
    async getPenguins() {
        const res = await axios.get<Penguin>(`${BACKEND_URL}/users`)
        const data = await res.data
        return data
    }
}

export default new PenguinApi()