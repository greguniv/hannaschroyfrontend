import './styles.css'
import { Link } from 'react-router-dom'
// Images
import griffons from '../../images/Illustrations/elefluff_griffons_online.png'
import midnight from '../../images/Storyboards/slide191.png'
import lastdance from '../../images/Comics/ch02_p02_v2_001.png'
import zagmerch from '../../images/Merch/zag_sample_front.png'

const Home = () => {
    return (
        <div className="ui four column centered grid container">
            <div className='row'>
                <div className='middle aligned column'>
                    <div className="ui raised card">
                        <a className="image" href="#">
                            <img src={griffons} />
                        </a>
                        <div className="content">
                            <a className="header" href="#">ILLUSTRATIONS</a>
                        </div>
                    </div>
                </div>

                <div className='middle aligned column'>
                    <div className="ui raised card">
                        <a className="image" href="#">
                            <img src={lastdance} />
                        </a>
                        <div className="content">
                            <a className="header" href="#">COMICS</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='left floated center aligned column'>
                        <div className="ui raised card" id='midnight'>
                            <Link className="image" to="/storyboards">
                                <img src={midnight} />
                            </Link>
                            <div className="content">
                                <Link className="header" to="/storyboards">STORYBOARDS</Link>
                            </div>
                        </div>
                    </div>

                    <div className='right floated center aligned column'>
                        <div className="ui raised card">
                            <a className="image" href="#">
                                <img src={zagmerch} />
                            </a>
                            <div className="content">
                                <a className="header" href="#">MERCHANDISE DESIGN</a>
                            </div>
                        </div>
                    </div>
            </div>


        </div>
    );
}

export default Home;
