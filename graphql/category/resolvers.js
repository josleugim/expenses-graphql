'use strict';

const categoryResolver = {
    Query: {
        categories: () => {
            return [
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
            ]
        }
    },
    Mutation: {
        addCategory: (name) => {

        }
    }
}

module.exports = categoryResolver;
