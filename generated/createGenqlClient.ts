import { createClient } from '.';

export const createGenqlClient = () => {
    return createClient({
        url: 'http://localhost:8080/v1/graphql',
    });
};