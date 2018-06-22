import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';

import readMoviesQuery from './../query/readMovies';
import deleteMovieMutation from '../query/deleteMovies';

class MovieList extends Component {
    renderMovies() {
        if(!this.props.readMoviesQuery.loading) {
            return  this.props.readMoviesQuery.movies.map( (movie) => {
                return <li key={movie.id} 
                    className="collection-item">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    <i className="material-icons secondary-content delete_button"
                        onClick={() => this.onDeleteMovies(movie.id)}>delete</i>
                    </li>;
            });
        } else {
            return "Chargement des données";
        }
    }

    onDeleteMovies(id) {
        this.props.deleteMovieMutation({
            variables:{
                id //Pas besoin de l'écrire 2 fois si valeur identique
            }
        }).then ( () => {
            //rechargement de la page
            this.props.readMoviesQuery.refetch();
        })
    }


    render() {
        return (
            <div>
                <h1>Liste de films</h1>
                <ul className="collection">
                    {this.renderMovies()}
                </ul>
                <Link to="/movies/create" className="btn-floating btn-large wawes-effect wawes-light blue right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}


export default compose(
    graphql(readMoviesQuery, {
        name: "readMoviesQuery"
    }),
    graphql(deleteMovieMutation, {
        name: "deleteMovieMutation"
    }),
) (MovieList);