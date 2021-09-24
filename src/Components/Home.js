import './style_Sheets/Home.css'
import ProductCard from './ProductCard';

const Home = ({productList, isPending, error, editProductList}) => {

    const updateProducts = (numberOfItems, id) => {
        editProductList(previousProductList => {
            const newProductList = [...previousProductList];
            const index = newProductList.findIndex(product => (product.id === id))
            newProductList[index] = {...newProductList[index], numberOfItems: numberOfItems}
            return newProductList;
        })
    };

    return(
        <div className="home">
            {isPending && <h2>Data Fetching please wait.. 😃</h2> }
            {error && <h2>{error}</h2> }
            {productList && productList.map(product => 
                <ProductCard key={product.id} product={product} updateProducts={updateProducts}/>)}
        </div>
    );
};

export default Home;