export function reducerFactory(initialState, handlers) {
  return function getHandler(state = initialState, action) {
    const handler = handlers[action.type];

    if (handler) {
      return handler(state, action);
    }

    return state;
  };
}

export function changeState(stateKey) {
  return function newState(state, action) {
    return state.set(stateKey, action[stateKey]);
  };
}
