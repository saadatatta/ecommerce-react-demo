import USER_TYPES from "./user.types";

export const setCurrentUser = (user) => ({
  type: USER_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: USER_TYPES.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: USER_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: USER_TYPES.SIGN_IN_FAILURE,
  payload: error.message,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: USER_TYPES.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: USER_TYPES.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: USER_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_TYPES.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: USER_TYPES.SIGN_OUT_FAILURE,
  payload: error.message,
});

export const signUpStart = (userCredentials) => ({
  type: USER_TYPES.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: USER_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: USER_TYPES.SIGN_UP_FAILURE,
  payload: error.message,
});
