import './publication.css'

export const PublicationCard = ({ publications, onReadMoreClick }) => {
    return (
        <div>
            {publications.map((publication, index) => (
                <div className="card" key={index}>
                    <div className="card-content">
                        <img src={publication.imagenPrincipal} alt="Imagen" />
                    </div>
                    <div className="card-content">
                        <label>Titulo</label>
                        <div>{publication.titulo}</div>
                    </div>
                    <div className="card-content">
                        <label>Descripción</label>
                        <div>{publication.descripcion}</div>
                    </div>
                    <div className="card-content">
                        <label>Autor</label>
                        <div>{publication.autor}</div>
                    </div>
                    <button onClick={() => onReadMoreClick(publication._id)}>Leer más</button>
                </div>
            ))}
        </div>
    );
}