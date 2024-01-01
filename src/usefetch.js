import { useEffect, useState } from "react";
//this hook can be used anywhere
const useFetch=(url)=>{ //custom hooks should always start with the word use
    const [data, setData]= useState(null);
    const [isPending, setIsPending]= useState(true); //places a lading message
    const [error, setError]= useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url) //fetches the blogs from the json server
            
            .then(res =>{
                console.log(res);
                if(!res.ok){  //if response does not even an 'okay' status, theor the error
                    throw Error('Could not fetch the data for that resource'); //throws the error
                }

                return res.json();
            })
            .then(data=> {
                console.log(data);
                setData(data);
                setIsPending(false); 
                setError(null);
            })
            .catch(err =>{
                setIsPending(false);
                setError(err.message); //catches the error
                //used for handling fetch errors
            })
        }, 1000); //will take one second to fetch the data
    },[]); //changes for every render on the DOM
    

    return{data, isPending, error}

}

export default useFetch