import gql from 'graphql-tag';

//Ecriture des requêtes telles que dans GraphiQL
export default gql`
mutation LikeReview($id : ID) {
    likeReview(id: $id){
        id,
        likes,
    }
}
`;


