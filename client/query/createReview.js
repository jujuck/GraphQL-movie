import gql from 'graphql-tag';

//Ecriture des requêtes telles que dans GraphiQL
export default gql`
mutation CreateReview($content : String, $movieId: ID!){
    addReviewToMovie(content: $content, movieId:$movieId){
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