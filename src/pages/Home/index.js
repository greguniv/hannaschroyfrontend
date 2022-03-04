import './styles.css'
import griffons from '../../images/Illustrations/elefluff_griffons_online.png'
import midnight from '../../images/Storyboards/slide191.png'
import lastdance from '../../images/Comics/ch02_p02_v2_001.png'
import zagmerch from '../../images/Merch/zag_sample_front.png'

const Home = () => {
    return (
        <div className="mainhome-container">
            <div>
                <div className="ui card">
                    <a className="image" href="#">
                        <img src={midnight} />
                    </a>
                    <div className="content">
                        <a className="header" href="#">STORYBOARDS</a>
                    </div>
                </div>
            </div>

            <div>
                <div className="ui card">
                    <a className="image" href="#">
                        <img src={griffons} />
                    </a>
                    <div className="content">
                        <a className="header" href="#">ILLUSTRATIONS</a>
                    </div>
                </div>
            </div>

            <div>
                <div className="ui card">
                    <a className="image" href="#">
                        <img src={lastdance} />
                    </a>
                    <div className="content">
                        <a className="header" href="#">COMICS</a>
                    </div>
                </div>
            </div>

            <div>
                <div className="ui card">
                    <a className="image" href="#">
                        <img src={zagmerch} />
                    </a>
                    <div className="content">
                        <a className="header" href="#">MERCHANDISE DESIGN</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
