
const ADD_GUESS = 'ADD_GUESS';
const addGuess = (guess) => ({
  type: ADD_GUESS,
  guess
});

const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
const showFeedback = () => {
  type: SHOW_FEEDBACK;
};

const GUESS_COUNT = 'GUESS_COUNT';
const guessCount = () => {
  type: GUESS_COUNT
};

const TOGGLE_WHAT = 'TOGGLE_WHAT';
const toggleWhat = () => {
  type: TOGGLE_WHAT
};

const CORRECT_ANSWER = 'CORRECT_ANSWER';
const correctAnswer = () => {
  type: CORRECT_ANSWER;
};

const RESET_STATE = 'RESET_STATE';
const resetState = () => {
  type: RESET_STATE;
};


