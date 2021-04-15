const initialState = {
  updateData: true,
  currentUser: null,
  status: "idle",
  error: null,
};

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default function userReducer(state = initialState, action) {
  const newState = deepCopy(state);
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

    // case "SEND_ADDED_TITLE": {
    //   return {
    //     ...state,
    //     status: "loading",
    //   };
    // }
    // case "RECEIVE_ADDED_TITLE": {
    //   newState.currentUser.user.userTitles.titles.push(action.data);
    //   return {
    //     ...newState,
    //     status: "active",
    //   };
    // }

    // case "RECEIVE_ADDED_TITLE_ERROR": {
    //   return {
    //     ...state,
    //     error: "error",
    //   };
    // }

    default:
      return state;
  }
}
