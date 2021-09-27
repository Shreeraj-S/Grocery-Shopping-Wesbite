import { useContext, useEffect, useState } from 'react';
import { UpdateNumberofItemsContext } from '../App';
import './style_Sheets/CartProduct.css'

const CartProduct = ({product}) => {
    const [numberOfItems, setNumberOfItems] = useState(1);

    const updateNumberofItems = useContext(UpdateNumberofItemsContext);

    useEffect(() => {
        setNumberOfItems(product.numberOfItems)
    }, [product.numberOfItems])

    const handleClick = (num, id) => {
        setNumberOfItems(previous => parseFloat(previous) + num)
    };

    const handleSubmit = (event, id) => {
        event.preventDefault()
        const numberOfItems = parseFloat(event.target.cartItems.value.substr(0, 2).trim());
        updateNumberofItems(id, numberOfItems)
    };

    const handleRemove = (id) => {
        updateNumberofItems(id, 0)
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
                    <button className='minus' onClick={() => handleClick(-1, product.id)}>-</button>
                    <input type="text" name="cartItems" value={numberOfItems} 
                        onChange={e => setNumberOfItems(e.target.value)} required/>
                    <button className='plus' onClick={() => handleClick(1, product.id)}>+</button>
                </form>
                <p className="total">Rs. {product.price * product.numberOfItems}</p>
                <p className="cancle" onClick={() => handleRemove(product.id)}>x</p>
        </div>
    );
};

export default CartProduct;