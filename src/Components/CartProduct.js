import { useEffect, useState } from 'react';
import './style_Sheets/CartProduct.css'

const CartProduct = ({product, updateProducts}) => {
    const [numberOfItems, setNumberOfItems] = useState(1);

    useEffect(() => {
        setNumberOfItems(product.numberOfItems)
    }, [product.numberOfItems])

    const handleClick = (num) => {
        setNumberOfItems(previous => previous + num)
    };

    const handleSubmit = (event, id) => {
        event.preventDefault()
        const numberOfItems = parseFloat(event.target.cartItems.value.substr(0, 2).trim());
        updateProducts(numberOfItems, id)
    };

    const handleRemove = (id) => {
        updateProducts(0, id)
    }
    return(
        <div className="cart_product">
            <img className="product_image" src={`/data/product_images/${product.image}`} alt="product " />
                <div className="produc_desc">
                    <p className="vendor">{product.vendor}</p>
                    <p className="name">{product.name}</p>
                    <p className="price">MRP: <span>Rs {product.price}</span></p>
                </div>
                <form className="add-to-cart-clicked" onSubmit={event => handleSubmit(event, product.id)}>
                    <button className='minus' onClick={() => handleClick(-1)}>-</button>
                    <input type="text" name="cartItems" value={numberOfItems} 
                        onChange={e => setNumberOfItems(e.target.value)} required/>
                    <button className='plus' onClick={() => handleClick(1)}>+</button>
                </form>
                <p className="total">Rs. {product.price * product.numberOfItems}</p>
                <p className="cancle" onClick={() => handleRemove(product.id)}>x</p>
        </div>
    );
};

export default CartProduct;