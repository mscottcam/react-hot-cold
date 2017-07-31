import * as actions from '.actions';

const initialState = {
  guesses: [],
  correctAnswer: null,
  feedback: 'Make your guess!'
};

export const reducer = (state = initialState, action) => {
  if (action.type === action.ADD_GUESS) {
    console.log('guess added');
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  }

  if (action.type === action.SHOW_FEEDBACK) {
    console.log('feedback shown');
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  }

  if (action.type === action.GUESS_COUNT) {
      return state.guesses.length
  }

  if (action.type === action.CORRECT_ANSWER) {
     return state.correctAnswer: Math.floor(Math.random() * 100) + 1
  }

  if (action.type === action.RESET_STATE) {
    return Object.assign({}, state, initialState)
  }  


};