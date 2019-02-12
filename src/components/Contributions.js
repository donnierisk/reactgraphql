import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { selectCurrency } from '../redux/actions';

import styled from 'styled-components';
import Filters from './Filters';
import SingleContribution from './SingleContribution';

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

const Wrapper = styled.div`
    width: calc(90vw - 32px);
    background: rgb(27, 30, 38);
    padding: 16px;
    color: white;
    margin-top: 20px;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        width: 60vw;
    }
`;

class Contributions extends React.Component {

    handleSelectCurrency = (currency) => {
        this.props.selectCurrency(currency);
       
    }

    render(){
        return (
            <Fragment>
                <h2>ICO Contributions:</h2>
                <div>
                    <Filters 
                        selectCurrency={this.handleSelectCurrency}
                        selectedCurrency={this.props.selectedCurrency}
                     />
                </div>
                <Wrapper>
                    <Query query={GET_CONTRIBUTIONS} >
                        { ({loading, error, data }) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;

                            let contributionsList = data.contributions;

                            if(this.props.selectedCurrency && this.props.selectedCurrency.length > 0) {
                                contributionsList = data.contributions.filter((contribution) => {
                                    return (this.props.selectedCurrency === contribution.currency)
                                });
                            }

                            return contributionsList.map((contribution, idx) => {
                                return <SingleContribution key={idx} info={contribution} />
                            })
                            } 
                        }
                    </Query>
                </Wrapper>
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
