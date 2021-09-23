import './style_Sheets/Home.css'
import useFetch from './useFetch';
import ProductCard from './ProductCard';

const Home = () => {
    const {data: productList, isPending, error} = useFetch('../data/products.json');
    return(
        <div className="home">
            {isPending && <h2>Data Fetching please wait.. 😃</h2> }
            {error && <h2>{error}</h2> }
            {productList && <ProductCard productList={productList}/>}
        </div>
    );
};

export default Home;