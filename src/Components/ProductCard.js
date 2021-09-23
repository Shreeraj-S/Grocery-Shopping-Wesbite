import './style_Sheets/ProductCard.css'

const ProductCard = ({productList}) => {
    return(
        productList.map(product => (
            <div className="product" key={product.id}>
                <p className="name">Name: {product.name}</p>
                <p className="price">MRP: {product.price}</p>
                <form className="add-to-cart">
                    <input type="number" />
                    <button type="submit">Add</button>
                </form>
            </div>
        ))
    );
};

export default ProductCard;