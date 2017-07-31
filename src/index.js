// import './reset.css';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import './reset.css';
// import './index.css';

// import Game from './components/game';

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

import store from './store';
import {newGuess} from './actions/actions';

store.dispatch(newGuess(64, 'You are cold'));

console.log("THIS IS WHAT YOU LOOKING FOR", store)
