import classNames from 'classnames/bind';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../provider/StateProvider';
import CloseIcon from '@mui/icons-material/Close';

import style from '../checkout/Checkout.module.scss';
import TextDisplay from '../textDisplay/TextDisplay';
const cx = classNames.bind(style);

function CartItem({ product, handleSubtract = () => {}, handleAdd = () => {}, handleClearItem = () => {} }) {
    // const [state, dispatch] = useStateValue();
    return (
        <>
            <div className={cx('cart-food')}>
                <div className={cx('cart-img')}>
                    <img src={product.img} alt="" />
                    <span
                        onClick={() => {
                            handleClearItem(product);
                        }}
                    >
                        <CloseIcon font-size="medium" className={cx('cart-item-clear')} />
                    </span>
                </div>
                <div className={cx('title')}>
                    <h4 className={cx('cart-title')}>{product.title}</h4>
                    <h4 className={cx('cart-title-mobile')}>
                        <TextDisplay text={product.title} limit={15} />{' '}
                    </h4>
                </div>
                <div className={cx('cart-count-and-btn')}>
                    <div>
                        <span className={cx('cart-item-count')}>{product.count} </span>
                    </div>
                    <div className={cx('btn-container')}>
                        <button
                            className={cx('btn', 'btn-remove')}
                            onClick={() => {
                                handleSubtract(product);
                            }}
                        >
                            -
                        </button>
                        <button
                            className={cx('btn', 'btn-add')}
                            onClick={() => {
                                handleAdd(product);
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={cx('pricexcount')}>
                    <CurrencyFormat
                        value={product.count * product.price}
                        prefix="$"
                        thousandSeparator={true}
                        displayType="text"
                        className={cx('total')}
                    />
                </div>
            </div>
        </>
    );
}

export default CartItem;
