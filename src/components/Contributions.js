import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
    render(){
        return (
            <Query query={GET_CONTRIBUTIONS} >
                { ({loading, data }) => !loading && (
                <div>
                    {data.contributions.map((single, idx) => {
                        return (
                            <p key={idx}>{single.currency}</p>
                        )
                    })}
                </div>   
                )}
            </Query>
        )
    }
}

export default Contributions;