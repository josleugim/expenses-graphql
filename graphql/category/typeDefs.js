'use strict';

const { gql } = require('apollo-server');

const typeDefs = gql`
    type Category {
        id: ID!
        name: String
        createdAt: String
        isActive: Boolean
    }
    
    extend type Query {
        categories: [Category]
    }
    
    extend type Mutation {
        addCategory(name: String): Category
    }
`;

module.exports = typeDefs;
