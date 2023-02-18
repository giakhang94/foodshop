/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import style from './Footer.module.scss';

const cx = classNames.bind(style);

function Footer() {
    return (
        <div className={cx('footer')} id="footer">
            <div className={cx('social')}>
                <a href="#">
                    <InstagramIcon className={cx('social-icon')} />
                </a>
                <a href="#">
                    <TwitterIcon className={cx('social-icon')} />
                </a>
                <a href="#">
                    <FacebookIcon className={cx('social-icon')} />
                </a>
                <a href="#">
                    <LinkedInIcon className={cx('social-icon')} />
                </a>
            </div>
            <div className={cx('copyright')}>©copyright by Khang Nguyen learnt from Indian Guru on Udemy</div>
        </div>
    );
}

export default Footer;
