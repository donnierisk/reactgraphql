const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const CONTRIBUTIONS = require('./contributions.json');

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
    rootValue: root
}));

const port = process.env.PORT || 4000;
app.listen(port);
console.log('running graphql API server for retrieving contributions');