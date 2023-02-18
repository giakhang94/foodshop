import { useState } from 'react';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import chhola from '../../assets/images/chhola.jpg';
import dosa from '../../assets/images/dosa.jpg';
import idli from '../../assets/images/idli.jpg';
import masala from '../../assets/images/masala.jpg';
import paneer from '../../assets/images/paneer.jpg';
import rajasthani from '../../assets/images/rajasthani.jpg';
import south from '../../assets/images/south.jpg';
import CurrencyFormat from 'react-currency-format';
import Navbar from '../navbar/Navbar';
import { getCardUtilityClass } from '@mui/material';
import { useStateValue } from '../../provider/StateProvider';

const cx = classNames.bind(style);

const data = [
    {
        img: chhola,
        price: 500,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Món ăn chhola này ăn bao giờ chưa',
    },
    {
        img: dosa,
        price: 800,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Dosa ăn với socola uống cola',
    },
    {
        img: idli,
        price: 100,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Idli đọc là "I-li" chứ không phải "i-đờ-li',
    },
    {
        img: masala,
        price: 1200,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Masala đọc giống Mandala',
    },
    {
        img: paneer,
        price: 300,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Paneer ăn ở Campuchia',
    },
    {
        img: rajasthani,
        price: 2500,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Rajsthani ăn với Masurpilami',
    },
    {
        img: south,
        price: 550,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'South ăn với Virus',
    },
    {
        img: chhola,
        price: 500,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Món ăn chhola này ăn bao giờ chưa',
    },
    {
        img: rajasthani,
        price: 2500,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Rajsthani ăn với Masurpilami',
    },
    {
        img: south,
        price: 550,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'South ăn với Virus',
    },
    {
        img: chhola,
        price: 500,
        description: 'Với công thức hảo hạn của nhà cái đến từ châu Âu, đây hẳng là món ăn tuyệt vời',
        count: 1,
        title: 'Món ăn chhola này ăn bao giờ chưa',
    },
];

function Menu() {
    const [state, dispatch] = useStateValue();
    const [cart, setCart] = useState([]);
    function handleAddToCart(food) {
        setCart((prev) => [...prev, food]);
    }

    return (
        <>
            <Navbar getCartCount={cart.length} dataCheckout={cart} />
            <div className={cx('menu')}>
                <div className={cx('menu-title')}>Menu</div>
                <div className={cx('menu-content')}>
                    {data.map((food, index) => {
                        return (
                            <div className={cx('menu-item')}>
                                <img src={food.img} alt="" className={cx('item-img')} />
                                <div className={cx('item-info')}>
                                    <h4 className={cx('item-title')}>{food.title}</h4>
                                    <small className={cx('item-description')}>{food.description}</small>
                                </div>
                                <span className={cx('item-price')}>
                                    <CurrencyFormat
                                        value={food.price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix="$"
                                    />
                                </span>
                                <button
                                    className={cx('item-btn')}
                                    onClick={() => {
                                        dispatch({
                                            type: 'ADD',
                                            item: food,
                                        });
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Menu;
