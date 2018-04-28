// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

// action creators are functions that return a "action object"
export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
