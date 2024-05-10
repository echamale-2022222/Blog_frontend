import './nav.css';
import logo from '../../assets/img/EscudoPeque.svg';

export const Nav = () => {
    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><a onClick={() => window.location.reload()}>Inicio</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
