import React from 'react'

const CurrencyRow = (props) =>{
    const {currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount} = props 
    return (
    <div className="d-flex">
    <form className="form-inline">  
    <input type="number" className="input form-control d-inline" value={amount} onChange={onChangeAmount}/>
    <select className="d-inline form-control select" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option =>
            <option key={option} value={option}>{option}</option>
        )}
    </select>
    </form>
    </div>
    )
}

export default CurrencyRow;