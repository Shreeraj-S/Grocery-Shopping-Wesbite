import { useEffect, useReducer} from "react";
const uri = '../data/products.json'

const initialState = {isPending: true, data: null, error: null};

const reducer = (state, action) => {
    switch(action.type){
        case 'Data_Fetch_Successful':
            return {isPending: false, data: action.payload, error: null};
        case 'Data_Fetch_Failed':
            return {isPending: false, data: null, 
                error: `Sorry we are unable to get data at the moment please try again later 😓 Error: ${action.error}`};
        case 'Update_Number_Of_Items':
            const newData = [...state.data];
            const index = newData.findIndex(element => (element.id === action.id))
            newData[index] = {...newData[index], numberOfItems: action.numberOfItems}
            return {isPending: false, data: newData, error: null};
        default:
            return initialState;
    }
};

const useFetch = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const getData = async () =>{
            const response = await fetch(uri);
            const data = await response.json();
            return data;
        };
        
        getData()
            .then(data => dispatch({type: 'Data_Fetch_Successful', payload: data}))
            .catch(error => dispatch({type: 'Data_Fetch_Failed', error: error.message}));
    },[])

    const updateNumberofItems = (id, numberOfItems) => {
        if(!(numberOfItems < 1))
         dispatch({type: 'Update_Number_Of_Items', id: id, numberOfItems: numberOfItems})
    };

    const {data, isPending, error} = state;
    return {data, isPending, error, updateNumberofItems};
};

export default useFetch;