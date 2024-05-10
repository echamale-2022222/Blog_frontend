import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { agregarComentario as agregarComentarioService } from "../../services";
import toast from "react-hot-toast";

export const usePublication = () => {
    const [publications, setPublications] = useState();

    const savePublications = (id, data) => {
        const response = agregarComentarioService(id, data);

        if (response.error) {
            return toast.error(
                response.e?.response?.data || "Error al agregar comentario"
            )
        }

        toast.success("Comentario agregado correctamente");
    };
}
