import { useRef, useState, useContext, useEffect} from 'react';
import { UpdateNumberofItemsContext } from '../App';
import './style_Sheets/ProductCard.css'
import { ReactComponent as Available } from './images/available.svg';
import { ReactComponent as NotAvailable } from './images/not_available.svg';

const ProductCard = ({product}) => {
    const addtoCartClicked = useRef();
    const [numberOfItems, setNumberOfItems] = useState(1);

    const updateNumberofItems = useContext(UpdateNumberofItemsContext);

    useEffect(() => {
        if(product.numberOfItems)
        setNumberOfItems(product.numberOfItems);
    }, [product.numberOfItems])

    const handleClick = (num) => {
        setNumberOfItems(previous => parseFloat(previous) + num)
    };

    const handleSubmit = (event, id) => {
        event.preventDefault()
        event.target.classList.add('inactive');
        addtoCartClicked.current.classList.add('active')
        const numberOfItems = parseFloat(event.target.cartItems.value.substr(0, 2).trim());
        updateNumberofItems(id, numberOfItems);
    };

    return(
            <div className="product">
                <img className="product_image" src={`/data/product_images/${product.image}`} alt="product " />
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
                    <form className="add-to-cart-normal" onSubmit={event => handleSubmit(event, product.id)}>
                        <span className="qty">Qty</span>
                        <input type="text" name="cartItems" value={numberOfItems} 
                            onChange={e => setNumberOfItems(e.target.value)} required/>
                        <button type="submit">ADD <span className="cart_icon"></span></button>
                    </form>
                    <form className="add-to-cart-clicked" ref={addtoCartClicked} onSubmit={event => handleSubmit(event, product.id)}>
                        <button className='minus' onClick={() => handleClick(-1)}>-</button>
                        <input type="text" name="cartItems" value={`${numberOfItems} in basket`} 
                            onChange={e => setNumberOfItems(e.target.value)} required />
                        <button className='plus' onClick={() => handleClick(1)}>+</button>
                    </form>
                </div>
            </div>
    );
};

export default ProductCard;