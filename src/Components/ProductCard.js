import './style_Sheets/ProductCard.css'

const ProductCard = ({productList, editProductList}) => {
    const handleSubmit = (event, index) => {
        event.preventDefault()
        editProductList(previousProductList => {
            const newProductList = [...previousProductList];
            newProductList[index] = {...newProductList[index], numberOfItems: event.target.cartItems.value}
            return newProductList;
        })
    };
    return(
        productList.map((product, index) => (
            <div className="product" key={product.id}>
                <img className="product_image" src={`/data/product_images/${product.image}`} alt="product " />
                <p className="name">{product.name}</p>
                <div className="bottom">
                    <p className="price">MRP: <strike>Rs 200</strike> <span>Rs {product.price}</span></p>
                    <p className="delivery">
                        <span className="bike_image"></span> 
                        <span className="text">Express Delivery: Today 3:30PM - 5:30PM</span>
                        </p>
                    <form className="add-to-cart" onSubmit={event => handleSubmit(event, index)}>
                        <span className="qty">Qty</span>
                        <input type="text"/>
                        <button type="submit">ADD <span className="cart_icon"></span></button>
                    </form>
                </div>
            </div>
        ))
    );
};

export default ProductCard;