import './style_Sheets/Home.css'
import ProductCard from './ProductCard';

const Home = ({productList, isPending, error, editProductList}) => {

    const handleSubmit = (event, id, addtoCartClicked) => {
        event.preventDefault()
        event.target.classList.add('inactive');
        addtoCartClicked.current.classList.add('active')
        editProductList(previousProductList => {
            const newProductList = [...previousProductList];
            const index = newProductList.findIndex(product => (product.id === id))
            newProductList[index] = {...newProductList[index], 
                numberOfItems: parseFloat(event.target.cartItems.value.substr(0, 2).trim())}
            return newProductList;
        })
    };

    return(
        <div className="home">
            {isPending && <h2>Data Fetching please wait.. 😃</h2> }
            {error && <h2>{error}</h2> }
            {productList && productList.map(product => 
                <ProductCard key={product.id} product={product} handleSubmit={handleSubmit}/>)}
        </div>
    );
};

export default Home;