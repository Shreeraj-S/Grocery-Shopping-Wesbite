import { useState, useEffect} from "react";

const useFetch = (uri) => {
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
    }, [uri])

    return {data, isPending, error};
};

export default useFetch;