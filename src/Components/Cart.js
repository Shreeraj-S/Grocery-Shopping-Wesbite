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
    };

    const subTotal = productList.reduce((total, current) => {
        total += current.price * current.numberOfItems;
        return total;
    },0)

    return(
        <div className="cart">
            {productList && productList.map(product => 
                <CartProduct key={product.id} product={product} updateProducts={updateProducts}/>)}
            {productList && 
                (<div className="billing">
                    <p className="sub_total">Sub Total: {subTotal}</p>
                    <p className="delivery_total">Delivry Charge: Rs. 50</p>
                    <p className="grand_total">Grand Total: Rs. {subTotal + 50}</p>
                    <button className="checkout">Checkout</button>
                </div>)
            }
        </div>
    );
}

export default Cart;