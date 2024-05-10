import './footer.css'; 

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Enlaces</h2>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Redes Sociales</h2>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contacto</h2>
                    <p>Dirección: Ciudad capital</p>
                    <p>Teléfono: +502 4756-1296</p>
                    <p>Email: echamale-2022222@kinal.edu.gt</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Edwar Chamalé. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
