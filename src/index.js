import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC9eTy8dtGkhitAOSq71ToF_uDUA1iexE8'; 

const App = function(){
    return (
        <div>
            <SearchBar/>
        </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('.container'));