import './style_Sheets/Home.css'
import ProductCard from './ProductCard';

const Home = ({productList, isPending, error, editProductList}) => {

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
        <div className="home">
            {isPending && <h2>Data Fetching please wait.. 😃</h2> }
            {error && <h2>{error}</h2> }
            {productList && productList.map((product, index) => 
                <ProductCard key={product.id} product={product} index={index} handleSubmit={handleSubmit}/>)}
        </div>
    );
};

export default Home;