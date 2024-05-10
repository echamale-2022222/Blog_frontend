import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:3000/blog/v1",
    timeout: 5000,
})

export const listarPublicaciones = async () => {
    try {
        return await api.get('/publications')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}