import './style_Sheets/Home.css'
import ProductCard from './ProductCard';

const Home = ({productList, isPending, error}) => {
    return(
        <div className="home">
            {isPending && <h2>Data Fetching please wait.. 😃</h2> }
            {error && <h2>{error}</h2> }
            {productList && productList.map(product => 
                <ProductCard key={product.id} product={product} />)}
        </div>
    );
};

export default Home;