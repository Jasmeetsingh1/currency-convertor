import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const x = 'conversion_rates'
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/d67069aafaa9fabbeac0e091/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[x]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;