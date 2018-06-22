import gql from 'graphql-tag';

//Ecriture des requêtes telles que dans GraphiQL
export default gql`
    query exploreMovieQuery($id : ID!) {
        movie(id: $id){
        id,
        title,
        reviews{
            id,
            content,
            likes
        }
    }
}
`;

