import * as CalActions from "./actionType";

const addNum = (payload) => {
  return {
    type: CalActions.ADD_NUM,
    payload
  };
};

const reduceNum = (payload) => {
  return {
    type: CalActions.REDUCE_NUM,
    payload
  };
};
export { addNum, reduceNum };
