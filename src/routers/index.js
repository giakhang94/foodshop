import About from '../components/about/About';
import Checkout from '../components/checkout/Checkout';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Menu from '../components/menu/Menu';
import Navbar from '../components/navbar/Navbar';
import Contact from '../contact/Contact';

const publicPath = [
    { path: '/', element: Home },
    { path: '/menu', element: Menu },
];
const homePath = [
    { path: '/', element: Home },
    { path: '/navbar', element: Navbar },
    { path: '/footer', element: Footer },
    { path: '/menu', element: Menu },
    { path: '/about', element: About },
    { path: '/contact', element: Contact },
    { path: '/checkout', element: Checkout },
];
export { publicPath, homePath };
