import gql from 'graphql-tag';

//Ecriture des requêtes telles que dans GraphiQL
const readMoviesQuery = gql`
{
    movies{
        id, 
        title
    }
}
`;

export default readMoviesQuery;