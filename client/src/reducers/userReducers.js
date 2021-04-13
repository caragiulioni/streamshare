const initialState = {
  currentUser: null,
  status: "idle",
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_USER_DATA": {
      return {
        ...state,
        currentUser: action.data.user,
        status: "idle",
      };
    }
    case "RECEIVE_USER_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default:
      return state;
  }
}
