import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import banner from '../../assets/images/food.jpeg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    return (
        <>
            <Navbar />
            <div className={cx('home')} id="home" style={{ backgroundImage: `url(${banner})` }}>
                <div className={cx('home-container')}>
                    <h1>Food Corner</h1>
                    <p>Vietnamese Food At A Click!</p>
                    <Link to="/menu">
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
