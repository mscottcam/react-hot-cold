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
import * from './actions/action'

store.dispatch(addGuess())
