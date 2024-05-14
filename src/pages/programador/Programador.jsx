import React from 'react';
import './programador.css'; 
import { Nav } from '../../components/nav/Nav';
import { Footer } from '../../components/footer/Footer';
import foto from '../../assets/img/Programador.jpg';
export const Programador = () => {
    return (
        <>
        <Nav/>
        <div>
            <section className="sobremi">
                <div className="sobre_mi_foto">
                    <img src={foto} alt="Foto de perfil" />
                </div>
                <div className="sobre_mi">
                    <p className="titulo_seccion">Sobre mí</p>
                    <h2>Mi nombre es: <span>Edwar Chamalé</span></h2>
                    <h3>Programador</h3>
                    <p>Actualmente, me encuentro en mi formación académica en la carrera de Informática en Fundación Kinal. Durante este período de estudio, he estado cultivando y fortaleciendo mis habilidades en el ámbito informático.</p>
                    <p>A mis 18 años, aspiro a convertirme en un desarrollador Full Stack, reconociendo que mi camino de aprendizaje es aún extenso. Sin embargo, estoy comprometido a dedicar el tiempo y esfuerzo necesarios para alcanzar mi meta y seguir avanzando en mi desarrollo profesional en este fascinante campo.</p>
                </div>
            </section>

            <section className="metas">
                <div className="metas_p">
                    <p className="tituloMetas">Mis metas como Programador</p>
                    <h2>Persiste en tu esfuerzo, cada pequeño avance te acerca a la victoria.</h2>
                    <ul>
                        <li>Obtener una certificación relevante</li>
                        <li>Dominar un marco de desarrollo (Framework)</li>
                        <li>Ser capaz de desarrollar aplicaciones desde cero</li>
                        <li>Crear un blog donde pueda ayudar a gente que tiene dudas</li>
                        <li>Participar en entrevistas técnicas simuladas</li>
                        <li>Lograr mantener un equilibrio saludable entre trabajo y vida</li>
                        <li>Establecer una rutina de aprendizaje continuo</li>
                        <li>Desarrollar habilidades de comunicación</li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
};
