const initailState = {
  value: 0
};

export default function example(state = initailState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        value: state.value + 1
      };
    default:
      return state;
  }
}
