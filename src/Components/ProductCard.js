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
                {/* <img src={`/data/product_images/${product.image}`} alt="product " /> */}
                <p className="name">Name: {product.name}</p>
                <p className="price">MRP: {product.price}</p>
                <form className="add-to-cart" onSubmit={event => handleSubmit(event, index)}>
                    <input type="text" name="cartItems" />
                    <button type="submit">Add</button>
                </form>
            </div>
        ))
    );
};

export default ProductCard;