import { Link } from 'react-router-dom';
import './styles.css'

const Nav = () => {
    return (
        <div className="navbar-contents">
            <div className="ui menu">
                <Link className="item" to="/">
                    <h1>Hanna Schroy</h1>
                    {/* <h6>Cartoonist | Illustrator</h6> */}
                </Link>
                <div className="right menu">
                <Link className="item" to="/">Portfolio</Link>
                    <Link className="item" to="about">About</Link>
                    <Link className="item" to="contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
