import classNames from 'classnames/bind';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../provider/StateProvider';
import CartItem from '../cartItem/CartItem';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import TextDisplay from '../textDisplay/TextDisplay';

import style from './Checkout.module.scss';

const cx = classNames.bind(style);
function Checkout() {
    const [state, dispatch] = useStateValue();
    let subTotal = 0;
    state.cart.map((item) => {
        subTotal += item.price * item.count;
        return 1;
    });
    function handleSubtract(productToSub) {
        dispatch({ type: 'SUB_COUNT', item: productToSub });
    }
    function handleAdd(productToAdd) {
        dispatch({ type: 'ADD_COUNT', item: productToAdd });
    }
    function handleClearItem(productToClear) {
        dispatch({ type: 'CLEAR_ITEM', item: productToClear });
    }
    return (
        <>
            <Navbar />
            <div className={cx('checkout')}>
                <h2 className={cx('subTotal')}>
                    <span>Your Cart - Total: </span>
                    <CurrencyFormat
                        className={cx('total')}
                        value={subTotal}
                        prefix="$"
                        displayType="text"
                        thousandSeparator={true}
                    />
                </h2>
                {/* //cái này đáng lẻ phải tách component mà lười rồi hihi */}
                <div className={cx('checkout-list')}>
                    {state.cart.map((product, key) => {
                        if (product.count > 0) {
                            return (
                                <CartItem
                                    product={product}
                                    handleSubtract={handleSubtract}
                                    handleAdd={handleAdd}
                                    handleClearItem={handleClearItem}
                                />
                            );
                        }
                    })}
                </div>
                <div className={cx('total')}></div>
            </div>
            <Footer />
        </>
    );
}
export default Checkout;
