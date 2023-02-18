import classNames from 'classnames/bind';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

import style from './Contact.module.scss';
import banner from '../assets/images/fooda.jpeg';
const cx = classNames.bind(style);

function Contact() {
    return (
        <>
            <Navbar />
            <div className={cx('contact')}>
                <div className={cx('left-contact')} style={{ backgroundImage: `url(${banner})` }}></div>
                <div className={cx('right-contact')}>
                    <h2 className={cx('contact-title')}>Contact Us</h2>
                    <form action="" className={cx('form-contact')}>
                        <div className={cx('form-control', 'fullname')}>
                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder="Enter your fullname" />
                        </div>
                        <div className={cx('form-control', 'email')}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className={cx('form-control', 'message')}>
                            <label htmlFor="">Message</label>
                            <textarea type="paragraph" placeholder="Enter your message" />
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
