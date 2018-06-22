import gql from 'graphql-tag';

//Ecriture des requêtes telles que dans GraphiQL
const createMoviesMutation = gql`
mutation addMovie($title : String) {
    addMovie(title: $title){
        id,
        title
    }
}
`;

export default createMoviesMutation;