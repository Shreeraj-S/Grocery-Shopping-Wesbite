import { useRef, useContext} from 'react';
import { UpdateNumberofItemsContext } from '../App';
import './style_Sheets/ProductCard.css'
import { ReactComponent as Available } from './images/available.svg';
import { ReactComponent as NotAvailable } from './images/not_available.svg';
import fallback_image from './images/fallback_product_image.png';

const ProductCard = ({product}) => {
    const addtoCartClicked = useRef();
    const updateNumberofItems = useContext(UpdateNumberofItemsContext);

    const handleClick = num => {
        updateNumberofItems(product.id, product.numberOfItems + num);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.classList.add('inactive');
        addtoCartClicked.current.classList.add('active')
        
        const numberOfItems = parseFloat(event.target.cartItems.value.substr(0, 2).trim());
        updateNumberofItems(product.id, numberOfItems);
    };

    return(
            <div className="product">
                <img className="product_image" src={product.image} alt="product "
                    onError={event => event.target.setAttribute('src', fallback_image)} />
                <span className="availablility">{product.available ? 
                    <span className='available'><Available /></span> : 
                    <span className='not_available'><NotAvailable /></span> }</span>
                <p className="name">{product.name}</p>
                <div className="bottom">
                    <p className="price">MRP: <strike>Rs 200</strike> <span>Rs {product.price}</span></p>
                    <p className="delivery">
                        <span className="bike_image"></span> 
                        <span className="text">Express Delivery: Today 3:30PM - 5:30PM</span>
                        </p>
                    <form className="add-to-cart-normal" onSubmit={handleSubmit}>
                        <span className="qty">Qty</span>
                        <input type="text" name="cartItems" defaultValue='1' required/>
                        <button type="submit">ADD <span className="cart_icon"></span></button>
                    </form>
                    <form className="add-to-cart-clicked" ref={addtoCartClicked} onSubmit={event => event.preventDefault()}>
                        <button className='minus' onClick={() => handleClick(-1)}>-</button>
                        <input type="text" name="cartItems" value={`${product.numberOfItems} in basket`} 
                            readOnly= {true} required />
                        <button className='plus' onClick={() => handleClick(1)}>+</button>
                    </form>
                </div>
            </div>
    );
};

export default ProductCard;