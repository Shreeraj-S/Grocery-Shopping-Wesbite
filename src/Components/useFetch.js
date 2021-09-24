import { useState, useEffect} from "react";
const uri = '../data/products.json'

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () =>{
            const response = await fetch(uri);
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Sorry we are unable to get data at the moment please try again later 😓');
            }
        };
        
        getData()
            .then(data => {
                setData(data);
                setisPending(false);
            })
            .catch(error => {
                setError(error.message)
                setisPending(false)
            });
    },[])

    return {data, isPending, error, setData};
};

export default useFetch;