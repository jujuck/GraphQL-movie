import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { hashHistory } from 'react-router';

import createMoviesMutation from '../query/createMovies';
import readMoviesQuery from '../query/readMovies';

class MovieCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {terms: "", errors: []}
    }

    handleSubmitForm(e) {
        if(e.key === "Enter"){
            //Bloque le rechargement de la page
            e.preventDefault();
            this.props.mutate({
                variables: {
                    title: this.state.terms
                },
                //Vide du cahche pour le rechargement des données
                refetchQueries: [{query: readMoviesQuery}]
            //redirection après l'envoie des données (mutation)
            }).then( () => {
                hashHistory.push("/movies");
            }).catch( (errors) => {
                const errorMessages = errors.graphQLErrors.map( err => err.message);
                this.setState({errors:errorMessages});
            })
        }
    }

    renderErrors (){
        return this.state.errors.map( m => m);
    }

    render() {
        return (
        <div>
            <h1>Ajouter un film</h1>
            <form className="input-field col s6">
                <input type="text" 
                    className="validate" 
                    onChange={e => this.setState({terms: e.target.value}) } 
                    onKeyPress={this.handleSubmitForm.bind(this)}
                />
                <label className="active">Titre</label>
            </form>
            <div className="row errors">
                {this.renderErrors()}
            </div>
        </div>
        )   
    }
}

export default graphql(createMoviesMutation)(MovieCreate);