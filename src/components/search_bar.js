import React, { Component } from 'react'; // en la variable Component

class SearchBar extends Component { // para los que cambian

    constructor(props) {

        super(props);

        this.state = { term: '¡Busca un video!' };

    }

    render() {
        return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={ event => this.onInputChange(event.target.value) } />
        </div>
        );
    }

    onInputChange(term) {

        this.setState({term});
        this.props.onSearchTermChange(term);

    }

}

export default SearchBar;