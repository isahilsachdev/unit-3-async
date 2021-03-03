import { ADD_NUM, REDUCE_NUM } from "./actionType";

const init = {
  count: 0
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_NUM: {
      return { count: state.count + payload };
    }
    case REDUCE_NUM: {
      return { count: state.count - payload };
    }
    default:
      return state;
  }
};

export { reducer };
