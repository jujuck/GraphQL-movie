import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import likeReviewMutation from '../query/likeReview';

class ReviewList extends Component {
    likeReview(id, oldlikes) {
        this.props.likeReviewMutation({
            variables: {id},
            //Mise en place d'une reponse optimiste, anticipation de la réponse pour affichage
            optimisticResponse: {
                __typename: 'Mutation',
                likeReview : {
                    id : id,
                    __typename : 'ReviewType',
                    likes : oldlikes + 1
                }
            }
        })
    }

    renderReviewList() {
        return this.props.review.map( (review) => {
            return <li key={review.id} className="collection-item">
                {review.content}
                <div className="secondary-content delete_button">
                    <i className="material-icons "
                    onClick={() => this.likeReview(review.id, review.likes)}>thumb_up</i>
                    {review.likes}
                </div>
            </li>
        })
    }

    render() {
        return (
            <div>
                <ul className="collection">
                    {this.props.review && this.renderReviewList()}
                </ul>
            </div>
        )
    }
}

export default compose (
    graphql( likeReviewMutation, {
        name: 'likeReviewMutation'
    })
 ) (ReviewList);
  
