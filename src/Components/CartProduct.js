import { useRef, useState } from 'react';
import './style_Sheets/CartProduct.css'

const CartProduct = ({product, index, handleSubmit}) => {
    const addtoCartClicked = useRef();
    const [numberOfItems, setNumberOfItems] = useState(1)

    const handleClick = (num) => {
        setNumberOfItems(previous => previous + num)
    };
    return(
        <div className="cart_product">
            <img className="product_image" src={`/data/product_images/${product.image}`} alt="product " />
                <div className="produc_desc">
                    <p className="vendor">{product.vendor}</p>
                    <p className="name">{product.name}</p>
                    <p className="price">MRP: <span>Rs {product.price}</span></p>
                </div>
                <form className="add-to-cart-clicked" ref={addtoCartClicked} onSubmit={event => handleSubmit(event, index, addtoCartClicked)}>
                    <button className='minus' onClick={() => handleClick(-1)}>-</button>
                    <input type="text" name="cartItems" value={numberOfItems} 
                        onChange={e => setNumberOfItems(e.target.value)} required/>
                    <button className='plus' onClick={() => handleClick(1)}>+</button>
                </form>
                <p className="total">Rs. {product.price * product.numberOfItems}</p>
                <p className="cancle">x</p>
        </div>
    );
};

export default CartProduct;