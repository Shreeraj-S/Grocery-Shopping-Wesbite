import {Link } from 'react-router-dom'
import { ReactComponent as Search } from './images/search.svg';
import { ReactComponent as CartImage } from './images/cart_image.svg';
import './style_Sheets/Navbar.css'
import Cart from './Cart';
import { useRef } from 'react';

const Navbar = ({productList, editProductList}) => {
    const cartRef = useRef();
    
    const handleClick = () => {
        cartRef.current.classList.toggle('active');
    };

    const handleMouseLeave = () => {
        cartRef.current.classList.remove('active');
    }

    return(
        <>
            <nav>
                <Link className="company-logo" to='/'></Link>
                <form className="search">
                    <input type="text" placeholder="Search for Products.."/>
                    <div>
                    <button type="submit"><Search /></button>
                    </div>
                </form>
                <div className="cart_navbar" onMouseLeave={handleMouseLeave} onClick={handleClick}>
                    <CartImage className="cart_image" />
                    <div className='text'>
                        <span>My Basket <br /></span>
                        {productList && productList.reduce((count, current) => {
                        if(current.numberOfItems) count++
                        return count;
                        },0)
                        }
                        <span> items</span>
                    </div>
                </div>
            </nav>
            <div className="cart_items" ref={cartRef}>
                <Cart productList={productList} editProductList={editProductList}/>
            </div>
        </>
    );

};

export default Navbar;