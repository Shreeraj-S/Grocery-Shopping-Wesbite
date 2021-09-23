import './style_Sheets/Home.css'
import useFetch from './useFetch';

const Home = () => {
    const {data: productList, isPending, error} = useFetch('../data/products.json');
    console.log(productList, isPending, error);
    return(
        <h2>Home</h2>
    );
}

export default Home;