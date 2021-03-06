const initialState = {
  updateData: true,
  currentUser: null,
  status: "idle",
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_USER_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_USER_DATA": {
      return {
        ...state,
        currentUser: action.data,
        status: "active",
      };
    }
    case "RECEIVE_USER_DATA_ERROR": {
      return {
        ...state,
        currentUser: action.data,
        error: "error",
      };
    }

    case "REMOVE_CURRENT_USER": {
      return {
        ...state,
        currentUser: action.data,
        error: "error",
      };
    }

    default:
      return state;
  }
}
