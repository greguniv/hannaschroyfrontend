import { Link } from 'react-router-dom';
import './styles.css'

const Nav = () => {
    return (
        <div className="navbar-contents">
            <div className="ui menu">
                <Link className="item" to="home">
                    <div className="name-container">
                        <h1>Hanna Schroy</h1>
                        {/* <p>Cartoonist | Illustrator</p> */}
                    </div>
                </Link>
                <div className="right menu">
                    <Link className="item" to="home">Portfolio</Link>
                    <Link className="item" to="about">About</Link>
                    <Link className="item" to="contact">Contact</Link>
                    <Link className="item" to="login">Log In</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
