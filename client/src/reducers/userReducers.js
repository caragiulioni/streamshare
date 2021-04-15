const initialState = {
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
        error: "error",
      };
    }

    case "SEND_ADDED_TITLE": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ADDED_TITLE": {
      return {
        ...state,
        currentUser: action.data.userTitles.titles,
        status: "active",
      };
    }

    case "RECEIVE_ADDED_TITLE_ERROR": {
      return {
        ...state,
        error: "error",
      };
    }

    default:
      return state;
  }
}
