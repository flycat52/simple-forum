export function getReducer(initialState, reducers) {
  return (state = initialState, action) =>
    reducers && reducers[action.type]
      ? reducers[action.type](state, action)
      : state;
}
