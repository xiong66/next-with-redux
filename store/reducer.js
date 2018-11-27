const defaultState = {
  count: 0
};

export default (state = defaultState, action) => {
  if (action.type === 'add_count'){
    return {
      count: state.count + 1
    }
  }

  if (action.type === 'sub_count'){
    return {
      count: state.count - 1
    }
  }

  return state
}
