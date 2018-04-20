import { combineReducers } from 'redux';
import calculateCode from '../containers/calculateCode';

const code = (state = calculateCode(), action) => {
  switch (action.type) {
    case 'SET_CODE':
      return action.code
    default:
      return state
  }
}

const plays = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAY':
      return [
        ...state,
        {
          entry: action.entry,
          result: action.code,
        }
      ]
    case 'CLEAR_BOARD':
      return []
    default:
      return state
  }
};

const outcome = (state = null, action) => {
  switch (action.type) {
    case 'SET_OUTCOME':
      return action.outcome
    default:
      return state
  }
}

const current = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return action.current
    default:
      return state
  }
}

const inputs = (state = [...Array(4)], action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return state.slice(0, action.index).concat(action.input).concat(state.slice(action.index+1))
    case 'CLEAR_INPUTS':
      return [...Array(4)]
    default:
      return state
  }
}

const invalid = (state = false, action) => {
  switch (action.type) {
    case 'SET_INVALID':
      return action.bool
    default:
      return state
  }
}

const infoField = (state = 'explainer', action) => {
  switch (action.type) {
    case 'SET_INFO_FIELD':
      return action.selection
    default:
      return state
  }
}

// here begin reducers for handling database

const scores = (state = {}, action) => {
  switch (action.type) {
    case 'DB_SCORES_RESULTS': 
      return action.data
    case 'DB_SCORES_ERROR':
      return "Test Failed!"
    default:
      return state
  }
}

//

const GameBoard = combineReducers({
  code,
  plays,
  outcome,
  current,
  inputs,
  invalid,
  scores,
  infoField,
});

export default GameBoard;