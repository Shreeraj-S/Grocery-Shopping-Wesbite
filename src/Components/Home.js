import './style_Sheets/Home.css'
import ProductCard from './ProductCard';

const Pending = () => {
    return(
        <div className="pending">
            <p>Products loading please wait..😃</p>
        </div>
    );
};

const Error = ({error}) => {
    return(
        <div className="error">
            <p>Sorry we are unable to get data at the moment please try again later 😓</p>
            <p className='error_message'>Error : {error}</p>
        </div>
    );
};

const Home = ({productList, isPending, error}) => {
    return(
        <div className="home">
            {isPending &&  <Pending />}
            {error && <Error error={error}/> }
            <div className="products">
                {productList && productList.map(product => 
                    <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default Home;