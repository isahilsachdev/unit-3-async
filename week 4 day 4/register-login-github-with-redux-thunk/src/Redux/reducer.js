import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./actionTypes";

const init = {
  isAuth: false,
  isAuth2: false
};

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth2: true
      };
    }
    default: {
      return state;
    }
  }
};
