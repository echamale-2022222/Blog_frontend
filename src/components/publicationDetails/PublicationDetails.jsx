import React, { useEffect, useState } from 'react';
import { buscarPublicacion } from '../../services';
import './publicationDetails.css';
import { Input } from '../Input'
import { agregarComentario } from '../../services';

export const PublicationDetails = ({ publicationId }) => {
    const [publicationDetails, setPublicationDetails] = useState(null);
    const [formState, setFormState] = useState({
        nombre: {
            value: '',
            isValid: false,
            showError: false
        },
        comentario: {
            value: '',
            isValid: false,
            showError: false
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'nombre':
                isValid = value.length > 0;
                break;
            case 'comentario':
                isValid = value.length > 0;
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await agregarComentario(
            publicationId,
            formState.nombre.value,
            formState.comentario.value,
        );

        setFormState({
            nombre: { value: "" },
            comentario: { value: "" },
        });

        fetchPublicationDetails();
    };

    const fetchPublicationDetails = async () => {
        try {
            if (publicationId) {
                const data = await buscarPublicacion(publicationId);
                setPublicationDetails(data);
            } else {
                console.error('No publicationId provided');
            }
        } catch (error) {
            console.error('Error fetching publication details:', error);
        }
    };

    useEffect(() => {
        fetchPublicationDetails();
        console.log('Fetching publication details for id:', publicationId);
    }, [publicationId]);

    useEffect(() => {
        const fetchPublicationDetails = async () => {
            try {
                if (publicationId) {
                    const data = await buscarPublicacion(publicationId);
                    setPublicationDetails(data);
                } else {
                    console.error('No publicationId provided');
                }
            } catch (error) {
                console.error('Error fetching publication details:', error);
            }
        }
        fetchPublicationDetails();
        console.log('Fetching publication details for id:', publicationId);
    }, [publicationId]);
    console.log('Publication details:', publicationDetails);

    return (
        <div className="publication-details-container">
            {publicationDetails && (
                <div className="publication-details">
                    <div className="publication-details-item">
                        <label className='title'>Titulo</label>
                        <div>{publicationDetails.data.titulo}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Descripción</label>
                        <div>{publicationDetails.data.descripcion}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Autor</label>
                        <div>{publicationDetails.data.autor}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Link</label><br />
                        <a href={publicationDetails.data.link} target="_blank" rel="noopener noreferrer">
                            {publicationDetails.data.link}
                        </a>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Tecnologías utilizadas</label>
                        <div>{publicationDetails.data.tecnologiasUtilizadas}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>De que trata</label>
                        <div>{publicationDetails.data.deQueTrata}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Como funciona</label>
                        <div>{publicationDetails.data.comoFunciona}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Imágenes</label>
                        <div className="image-gallery">
                            {publicationDetails.data.imagenes.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index}`} />
                            ))}
                        </div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Caracteristicas principales</label>
                        <div>{publicationDetails.data.caracteristicasPrincipales}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Caracteristicas secundarias</label>
                        <div>{publicationDetails.data.caracteristicasSecundarias}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Etiquetas</label>
                        <div>{publicationDetails.data.etiquetas}</div>
                    </div>
                    <div className="publication-details-item">
                        <label className='title'>Fecha de creacion de la publicación</label>
                        <div>{publicationDetails.data.fechaCreacion}</div>
                    </div>
                    <hr />
                    <h2>Comentarios</h2>
                    <div className="comment-container">
                        <div className="comment-details">
                            <Input
                                field="nombre"
                                label="Nombre persona"
                                value={formState.nombre.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <Input
                                field="comentario"
                                label="Comentario"
                                value={formState.comentario.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="textarea"
                                className="comment-input"
                            />
                        </div>
                        <button onClick={handleFormSubmit} className="add-comment-btn">Agregar comentario</button>
                    </div>
                    <div className="comments-list">
                        {publicationDetails.data.comentarios && publicationDetails.data.comentarios.length > 0 ? (
                            publicationDetails.data.comentarios.map((comentario, index) => (
                                <div key={index} className="comment-card">
                                    <div>
                                        <label>Nombre persona: {comentario.nombre}</label>
                                    </div>
                                    <div>
                                        <label>Comentario: {comentario.comentario}</label>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-comments">No hay comentarios</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
