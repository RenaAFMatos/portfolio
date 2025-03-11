import './Nav.css';
import Logo from './assets/rena.png'

function Nav() {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="Logo for Reindeer Code" />
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
            </ul>
            <button>Hire me</button>
        </nav>
    );
}

export default Nav;
