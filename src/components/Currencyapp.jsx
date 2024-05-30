import { useEffect, useState } from 'react'
import './Currencyapp.css'
import axios from 'axios'
const Currencyapp = () => {

    const [currency, setCurrency] = useState(1);
    const [fromcurrency, setFromCurrency] = useState("USD");
    const [tocurrency, setToCurrency] = useState("INR")
    const [convertcurrency, setConverCurrency] = useState(null);
    const [exchangerate, setExchangeRate] = useState()

    const currencyChange = (e) => {
        setCurrency(e.target.value)
        // const value = parseFloat(e.target.value)
        // setCurrency(isNaN(value) ? 0 : value);
    }

    useEffect(() => {
        const getExchangeAmount = async () => {
            try {
                let url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
                const res = await axios.get(url);
                // console.log(res)
                setExchangeRate(res.data.rates[tocurrency])
                setConverCurrency
            } catch (error) {
                console.log("error")
            }
        }
        getExchangeAmount()
    }, [fromcurrency, tocurrency]);
    useEffect(() => {
        if (exchangerate !== null) {
            setConverCurrency((currency * exchangerate).toFixed(2))
        }
    }, [currency, exchangerate])

    const FromCurrency = (e) => {
        setFromCurrency(e.target.value)
    }
    const ToCurrency = (e) => {
        setToCurrency(e.target.value)
    }
    return (
        <>
            <div className="app-container">
                <div className="box"></div>
                <div className="data">
                    <h1>currency conveter</h1>
                    <div className="input-container">
                        <label htmlFor="from-currency">From Currency :</label>
                        <input type="number" id="from-currency" value={currency} onChange={currencyChange} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="from-currency">From Currency :</label>
                        <select name="" id="from-currency" value={fromcurrency} onChange={FromCurrency}>
                            <option value="USD">USD - United States dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - Great Britain Pound</option>
                            <option value="JPY">JPY - Japanese yen</option>
                            <option value="AUD">AUD - Australian Dollar</option>
                            <option value="CAD">CAD - Canadian dollar</option>
                            <option value="CNY">CNY - Chinese yuan renminbi</option>
                            <option value="BRL">BRL - Brazilian real</option>
                            <option value="INR">INR - Indian Rupee</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="to-currency">From Currency :</label>
                        <select name="" id="to-currency" value={tocurrency} onChange={ToCurrency}>
                        <option value="USD">USD - United States dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - Great Britain Pound</option>
                            <option value="JPY">JPY - Japanese yen</option>
                            <option value="AUD">AUD - Australian Dollar</option>
                            <option value="CAD">CAD - Canadian dollar</option>
                            <option value="CNY">CNY - Chinese yuan renminbi</option>
                            <option value="BRL">BRL - Brazilian real</option>
                            <option value="INR">INR - Indian Rupee</option>
                        </select>
                    </div>
                    <div className="result">
                        <p>{currency} {fromcurrency} curency value is {convertcurrency} {tocurrency} </p>
                    </div>
                    <div className="design">
                        <p>Designed By <a href='#'>Lotus</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Currencyapp
