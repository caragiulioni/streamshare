const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_NEW_USER_DATA": {
    }
    default:
      return state;
  }
}
