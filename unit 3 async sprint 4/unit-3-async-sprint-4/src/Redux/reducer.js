import {
  DELETE,
  Delete,
  GET_FAILURE,
  GET_REQUEST,
  GET_SUCCESS,
  SINGLE_DATA
} from "./actionType";

const init = {
  isLoading: true,
  isAuth: false,
  isError: false,
  data: [],
  single: []
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload
      };
    }
    case GET_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    case SINGLE_DATA: {
      return {
        ...state,
        single: payload
      };
    }
    case DELETE: {
      const update = state.data.filter((item) => item.id !== payload.id);
      return {
        ...state,
        data: update
      };
    }
    default: {
      return state;
    }
  }
};
