import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {term : 'Starting Value'};
    }
    render(){
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term : event.target.value})}/> 
            </div>
        );
    }
}

export default SearchBar;