import { useState } from "react"

const useFetch = async (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);

    try {
        const fetchData = await fetch(url);
        //to do..
    } catch (error) {
       setError(error)
    }

    //return...
}