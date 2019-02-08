const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const CONTRIBUTIONS = [
    {
        "address": "183nLVZFt3W6G79o5Yx8bTiEBsjER9eMVZ", // An Ethereum, Bitcoin or Litecoin address that contributed to our ICO
        "currency": "BTC", // Can be "ETH", "BTC" or "LTC"
        "value": 504114, // The contributed amount in the smallest possible unit (e.g. "wei" for Ethereum contributions, or "satoshi" for Bitcoin contributions
        "txid": "f6b48e20e78ed5800ca07ea2a782a14227fee043de86f88eaaebcd88d34c9650" // The transaction ID of this contribution
    },
    {
        "address": "710a5f86f59c4215db3f6a9c8f0213bc5389d939",
        "currency": "LTC", 
        "value": 100000000000000000, 
        "txid": "d137a652c618a1632f7a1961eb39da48abccd787cf7c49b82039e0fc37145b8c"
    },
    {
        "address":	"840e5662eb61526d236c13f88d75fabd2d783904",
        "currency":	"ETH",
        "value": 600000000000000000,
        "txid":	"623769fad911a8f8e32cc81c…ebfa35ed6a0a688cdb769ea"
    }
];

const schema = buildASTSchema(gql`
    type Query {
        contributions: [Contribution]
    }

    type Contribution {
        address: String
        currency: String
        value: Float
        txid: ID
    }
`);

const mapContributions = (contribution, id) => contribution && ({id, ...contribution});

const root = {
    contributions: CONTRIBUTIONS.map(mapContributions)
};

const app = express();
app.use(cors());
app.use('/contributions', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

const port = process.env.PORT || 4000;
app.listen(port);
console.log('running graphql API server for retrieving contributions');