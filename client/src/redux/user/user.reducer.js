import USER_TYPES from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case USER_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case USER_TYPES.SIGN_IN_FAILURE:
    case USER_TYPES.SIGN_OUT_FAILURE:
    case USER_TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        currentUser: null,
      };
    default:
      return state;
  }
};
