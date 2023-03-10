import classNames from 'classnames/bind';

import style from './About.module.scss';
import banner from '../../assets/images/masala.jpg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const cx = classNames.bind(style);

function About() {
    return (
        <>
            <Navbar />
            <div className={cx('about')}>
                <div className={cx('about-top')} style={{ backgroundImage: `url(${banner})` }}></div>
                <div className={cx('about-content')}>
                    <h2>About Us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;
