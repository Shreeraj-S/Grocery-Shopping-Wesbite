import { useRef, useState } from 'react';
import './style_Sheets/ProductCard.css'

const ProductCard = ({product, handleSubmit}) => {
    const addtoCartClicked = useRef();
    const [numberOfItems, setNumberOfItems] = useState(1)

    const handleClick = (num) => {
        setNumberOfItems(previous => previous + num)
    };

    return(
            <div className="product">
                <img className="product_image" src={`/data/product_images/${product.image}`} alt="product " />
                <p className="name">{product.name}</p>
                <div className="bottom">
                    <p className="price">MRP: <strike>Rs 200</strike> <span>Rs {product.price}</span></p>
                    <p className="delivery">
                        <span className="bike_image"></span> 
                        <span className="text">Express Delivery: Today 3:30PM - 5:30PM</span>
                        </p>
                    <form className="add-to-cart-normal" onSubmit={event => handleSubmit(event, product.id, addtoCartClicked)}>
                        <span className="qty">Qty</span>
                        <input type="text" name="cartItems" value={numberOfItems} 
                            onChange={e => setNumberOfItems(e.target.value)} required/>
                        <button type="submit">ADD <span className="cart_icon"></span></button>
                    </form>
                    <form className="add-to-cart-clicked" ref={addtoCartClicked} onSubmit={event => handleSubmit(event, product.id, addtoCartClicked)}>
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