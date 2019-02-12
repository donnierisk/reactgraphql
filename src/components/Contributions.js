import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';

import { selectCurrency } from '../redux/actions';


const GET_CONTRIBUTIONS = gql`

    query getContributions {
        contributions {
            txid
            address
            value
            currency
        }
    }
`;

class Contributions extends React.Component {

    handleSelectCurrency = (currency) => {
        this.props.selectCurrency(currency);
       
    }

    render(){
        return (
            <Fragment>
                <div>
                    <h3>Filters:</h3>
                    <p onClick={() => this.handleSelectCurrency()}>ALL</p>
                    <p onClick={() => this.handleSelectCurrency('BTC')}>BTC</p>
                    <p onClick={() => this.handleSelectCurrency('ETH')}>ETH</p>
                    <p onClick={() => this.handleSelectCurrency('LTC')}>LTC</p>
                </div>
                <Query query={GET_CONTRIBUTIONS} >
                    { ({loading, error, data }) => {
                        if (loading) return "Loading...";
                        if (error) return `Error! ${error.message}`;

                        if(this.props.selectedCurrency && this.props.selectedCurrency.length > 0) {
                            const filteredContributions = data.contributions.filter((contribution) => {
                                return (this.props.selectedCurrency === contribution.currency)
                            });

                            return filteredContributions.map((contribution, idx) => {
                                return <p key={idx}>{contribution.value} {contribution.currency}</p>
                            })
                        }
                        return data.contributions.map((contribution, idx) => {
                            return <p key={idx}>{contribution.value} {contribution.currency}</p>
                        })
                        } 
                    }
                </Query>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedCurrency: (state.selectedCurrency)
})

const mapDispatchToProps = (dispatch) => ({
    selectCurrency: currency => dispatch(selectCurrency(currency))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contributions)
