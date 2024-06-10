import axios from "axios";

const api = axios.create({
    baseURL: "https://blog-backend-azure.vercel.app/blog/v1",
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

export const buscarPublicacion = async (id) => {
    try {
        return await api.get(`/publication/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const agregarComentario = async (id, nombre, comentario) => {
    try {
        console.log('id', id)
        console.log('nombre', nombre)
        console.log('comentario', comentario)
        return await api.put(`/publication/${id}`, {nombre, comentario})
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}