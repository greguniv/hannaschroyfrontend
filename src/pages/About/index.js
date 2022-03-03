import elefluff from '../../images/elefluff_icon.jpg'
import './styles.css'

const About = () => {
    return (
        <div className="about-container">
            <img src={elefluff} alt="elefluff-icon" />
            <h4 className="about-text">
                Hanna Schroy is a TX-based freelance Cartoonist, Storyboard Artist, and Illustrator.

                Born and raised in Texas, attended the Savannah College of Art and Design in Atlanta, GA, graduated in 2017.

                Currently, she resides in Austin, TX.

                Hanna spends her "free time" reading and drawing comics, and has a strong passion for video games. Stories that include romance, friendship, and a dash of horror are her favorites.

                Check out Hanna's upcoming convention schedule or reach out to her through her contact page!
            </h4>
        </div>
    );
}

export default About;
