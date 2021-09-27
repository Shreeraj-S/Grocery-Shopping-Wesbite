import { useContext} from 'react';
import { UpdateNumberofItemsContext } from '../App';
import './style_Sheets/CartProduct.css'

const CartProduct = ({product}) => {
    const updateNumberofItems = useContext(UpdateNumberofItemsContext);
    
    const handleClick = num => {
        updateNumberofItems(product.id, product.numberOfItems + num)
    };

    const handleRemove = () => {
        updateNumberofItems(product.id, 0)
    };

    return(
        <div className="cart_product">
            <img className="product_image" src={`/data/product_images/${product.image}`} alt="product " />
                <div className="produc_desc">
                    <p className="vendor">{product.vendor}</p>
                    <p className="name">{product.name}</p>
                    <p className="price">MRP: <span>Rs {product.price}</span></p>
                </div>
                <form className="add-to-cart-clicked" onSubmit={event => event.preventDefault()}>
                    <button className='minus' onClick={() => handleClick(-1)}>-</button>
                    <input type="text" name="cartItems" value={product.numberOfItems} 
                        readOnly= {true} required/>
                    <button className='plus' onClick={() => handleClick(1)}>+</button>
                </form>
                <p className="total">Rs. {product.price * product.numberOfItems}</p>
                <p className="cancle" onClick={handleRemove}>x</p>
        </div>
    );
};

export default CartProduct;