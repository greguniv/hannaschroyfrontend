import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="ui menu">
                <Link className="item" to="/">
                    <h1>Hanna Schroy</h1>
                    <h6>Cartoonist | Illustrator</h6>
                </Link>
                <div className="right menu">
                <Link className="item" to="/">Portfolio</Link>
                    <Link className="item" to="about">About</Link>
                    <Link className="item" to="people">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
