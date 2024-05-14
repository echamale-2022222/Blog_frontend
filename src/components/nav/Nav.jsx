import './nav.css';
import logo from '../../assets/img/EscudoPeque.svg';
import { Link } from "react-router-dom";

export const Nav = () => {
    const handleInicioClick = () => {
        window.location.reload();
        window.location.href = '/';
    }

    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a onClick={handleInicioClick}>Inicio</a>
                        </li>
                        <li><Link to="/programador">Programador</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
