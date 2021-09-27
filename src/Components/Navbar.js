import {Link } from 'react-router-dom'
import { ReactComponent as Search } from './images/search.svg';
import { ReactComponent as CartImage } from './images/cart_image.svg';
import './style_Sheets/Navbar.css'
import Cart from './Cart';
import {useRef} from 'react';

const Navbar = ({productList, searchTerm, setSearchTerm}) => {
    const cartRef = useRef();
    const cartItems = productList ? 
        productList.reduce(((count, current) => (current.numberOfItems ? count + 1 : count)), 0) : 0

    const handleClick = () => {
        if(cartItems)
        cartRef.current.classList.toggle('active');
    };

    const handleMouseLeave = () => {
        cartRef.current.classList.remove('active');
    };

    return(
        <>
            <nav>
                <Link className="company-logo" to='/'></Link>
                <form className="search" onSubmit={event => event.preventDefault()}>
                    <input type="text" value={searchTerm} onClick={() => setSearchTerm('')}
                        onChange={event => setSearchTerm(event.target.value)} placeholder='Search for products..'/>
                    <div>
                    <button type="submit"><Search /></button>
                    </div>
                </form>
                <div className="cart_navbar" onClick={handleClick}>
                    <CartImage className="cart_image" />
                    <div className='text'>
                        <span>My Basket <br /></span>
                        {cartItems && cartItems}
                        <span> items</span>
                    </div>
                </div>
            </nav>
            {cartItems ? <div className="cart_items" ref={cartRef} onMouseLeave={handleMouseLeave}>
                {productList &&
                    <Cart productList={productList.filter(product => product.numberOfItems)} />}
            </div> : null}
        </>
    );

};

export default Navbar;