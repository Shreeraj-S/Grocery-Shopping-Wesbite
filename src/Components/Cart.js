import './style_Sheets/Cart.css'
import CartProduct from './CartProduct';

const Cart = ({productList, editProductList}) => {
    
    const handleSubmit = (event, index, addtoCartClicked) => {
        event.preventDefault()
        event.target.classList.add('inactive');
        addtoCartClicked.current.classList.add('active')
        editProductList(previousProductList => {
            const newProductList = [...previousProductList];
            newProductList[index] = {...newProductList[index], numberOfItems: event.target.cartItems.value}
            return newProductList;
        })
    };

    return(
        <div className="cart">
            {productList && productList.map((product, index) => 
                <CartProduct key={product.id} product={product} index={index} handleSubmit={handleSubmit}/>)}
        </div>
    );
}

export default Cart;