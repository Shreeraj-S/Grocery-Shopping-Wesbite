import './style_Sheets/Cart.css'
import CartProduct from './CartProduct';

const Cart = ({productList, editProductList}) => {

    const updateProducts = (numberOfItems, id) => {
        editProductList(previousProductList => {
            const newProductList = [...previousProductList];
            const index = newProductList.findIndex(product => (product.id === id))
            newProductList[index] = {...newProductList[index], numberOfItems: numberOfItems}
            return newProductList;
        })
    }

    return(
        <div className="cart">
            {productList && productList.map(product => 
                <CartProduct key={product.id} product={product} updateProducts={updateProducts}/>)}
            <div className="billing">
                <p className="sub_total">Sub Total: Rs. 118</p>
                <p className="delivery_total">Delivry Charge: Rs. 118</p>
                <p className="grand_total">Grand Total: Rs. 118</p>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;