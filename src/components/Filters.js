import React from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const Filter = styled.button`
    border: 0;
    background: #265cff;
    padding: 10px 15px;
    margin: 0 5px;
    color: white;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 0.3s ease;
    border-radius: 3px;
    &.active {
        opacity: 1;
    }
`;

const Filters = ({selectCurrency, selectedCurrency}) => {
    const currencyList = ['', 'BTC', 'ETH', 'LTC'];

    const filters = currencyList.map((currency, i) => {
        return (
        <Filter key={i} onClick={() => selectCurrency(currency)} className={((selectedCurrency === currency) || (selectedCurrency === undefined && currency === '')) ? 'active' : ''}>
            {currency.length === 0 ? 'All' : currency}
        </Filter>
        );
    });
    
    return (
        <FiltersWrapper>
            {filters}
        </FiltersWrapper>
    ); 
}

export default Filters;