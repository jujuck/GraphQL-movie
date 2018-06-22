import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import exploreMovieQuery from '../query/exploreMovie';
import { Link } from 'react-router';

import ReviewCreate from './review-create';
import ReviewList from './review-list';


class MovieDetail extends Component {

    render() {
        if(this.props.exploreMovieQuery.loading) {
            return <div> Chargement ...</div>
        }

        return (
            <div>
                <h1>Détails du film : {this.props.exploreMovieQuery.movie.title}</h1>
                <Link to="/movies">Retour à la liste des films</Link>
                <ReviewList review={this.props.exploreMovieQuery.movie.reviews}/>
                <ReviewCreate movieId={this.props.params.id} />
            </div>
        )
    }
}


export default compose(
    graphql(exploreMovieQuery, {
        name: "exploreMovieQuery",
        options : (props) => {
            return {
                variables: {
                    id : props.params.id
                }
            }
        }
    }), 
) (MovieDetail);