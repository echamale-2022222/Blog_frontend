import { useState } from "react";
import toast from "react-hot-toast";
import { getPublications as getPublicationService } from '../../services';

export const usePublications = () => {
    const [publications, setPublications] = useState([]);

    const obtenerPublicaciones = async () => {
        const publicationsData = await getPublicationService();
        if (publicationsData.error) {
            return toast.error(
                publicationsData.response?.data || "Error al obtener las publicaciones"
            );
        }
        setPublications(publicationsData.data);

        return publicationsData.data;
    };
}