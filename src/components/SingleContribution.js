import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% - 20px);
    padding: 5px;
    margin: 5px;
    background: #dedede;
    border-radius: 3px;

    p {
        font-size: 12px;
        color: #3e3e3e;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 95%;
        display: flex;
        align-items: center;

        i {
            margin-right: 5px;
        }

        strong {
            margin:0 3px;
        }
    }

    @media (min-width: 768px) {
        width: calc(50% - 20px);
    }
`;

const SingleContribution = ({ info }) => {

    const { address, currency, value, txid} = info;
    let infoLink = '';
    let divisor = 0;
    let addressExtension = '';
    let txExtenstion = '';

    switch(currency) {
        case 'BTC':
            infoLink = 'https://www.blockchain.com/btc';
            divisor = 100000000;
            addressExtension = '/address/';
            txExtenstion = '/tx/';
            break;
        case 'ETH':
            infoLink = 'https://etherscan.io';
            divisor = 1000000000000000000;
            addressExtension = '/address/';
            txExtenstion = '/tx/0x';
            break;
        case 'LTC':
            infoLink = 'https://live.blockcypher.com/ltc';
            divisor = 100000000;
            addressExtension = '/address/';
            txExtenstion = '/tx/';
            break;
        default:
            break;
    }

    return (
        <Wrapper>
            <p><i class="fas fa-fingerprint"></i> <a href={infoLink.length > 0 && infoLink + txExtenstion + txid} target="_blank" rel="noopener noreferrer">{txid}</a></p>
            <p><i class="fas fa-coins"></i> {value / divisor} <strong> {currency}</strong></p>
            <p><i class="fas fa-map-marker-alt"></i> <strong>Address: </strong><a href={infoLink.length > 0 && infoLink + addressExtension + address} target="_blank" rel="noopener noreferrer">{address}</a></p>
        </Wrapper>
    );
}

export default SingleContribution;