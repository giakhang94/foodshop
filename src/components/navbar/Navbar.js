import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import logo from '../../assets/images/logo.png';
import style from './Navbar.module.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../provider/StateProvider';

const cx = classNames.bind(style);

function Navbar() {
    const [state, dispatch] = useStateValue();
    let cart = 0;
    state.cart.map((item) => {
        cart += item.count;
        return true;
    });
    return (
        <div className={cx('navbar')}>
            <div className={cx('left-side')}>
                <Link to="/">
                    <img src={logo} alt="" className={cx('logo')} />
                </Link>
            </div>
            <div className={cx('right-side')}>
                <div className={cx('right-side-menu')}>
                    <Link to="/menu" className={cx('right-item')}>
                        Menu
                    </Link>
                    <Link to="/" className={cx('right-item')}>
                        Home
                    </Link>
                    <Link to="/about" className={cx('right-item')}>
                        About
                    </Link>
                    <Link to="/contact" className={cx('right-item')}>
                        Contact
                    </Link>
                    <Link to="/checkout" className={cx('right-item', 'cart')}>
                        <ShoppingCartIcon fontSize="medium" />
                        <span>{cart}</span>
                    </Link>
                </div>
                <div className={cx('right-side-mobile', 'mobile-icon')}>
                    <div className={cx('mobile--icon')}>
                        <MenuIcon fontSize="large" />
                        <Link to="/checkout" className={cx('right-item', 'cart')}>
                            <ShoppingCartIcon fontSize="medium" />
                            <span>{cart}</span>
                        </Link>
                    </div>
                    <ul className={cx('mobile-menu')}>
                        <Link className={cx('menu-item-link')} to="/">
                            <li className={cx('mobile-menu-item')}>Menu</li>
                        </Link>
                        <Link className={cx('menu-item-link')} to="/">
                            <li className={cx('mobile-menu-item')}>Home</li>
                        </Link>
                        <Link className={cx('menu-item-link')} to="/">
                            <li className={cx('mobile-menu-item')}>About</li>
                        </Link>
                        <Link className={cx('menu-item-link')} to="/">
                            <li className={cx('mobile-menu-item')}>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
