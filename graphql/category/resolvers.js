'use strict';
const categories = [
    {
        id: 1,
        name: 'Bicicleta',
        createdAt: '',
        isActive: true
    },
    {
        id: 2,
        name: 'Entretenimiento',
        createdAt: '',
        isActive: true
    }
];

const categoryResolver = {
    Query: {
        categories: () => {
            return categories;
        },
        category: (async (root, { id }, context) => {
            return categories
                .filter(item => item.id === Number(id))
                .pop();
        })
    },
    Mutation: {
        addCategory: (name) => {

        }
    }
}

module.exports = categoryResolver;
