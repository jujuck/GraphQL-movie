import gql from 'graphql-tag';

//Ecriture des requêtes telles que dans GraphiQL
const deleteMovieMutation = gql`
mutation deleteMovie($id : ID) {
    deleteMovie(id: $id){
        id,
        title
    }
}
`;

export default deleteMovieMutation;