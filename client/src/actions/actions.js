export const sendUserData = (data) => ({
  type: "SEND_USER_DATA",
  data,
});

export const receiveUserData = (data) => ({
  type: "RECEIVE_USER_DATA",
  data,
});

export const receiveUserDataErr = (data) => ({
  type: "RECEIVE_USER_DATA_ERR",
  data,
});

export const sendAddedTitle = (data) => ({
  type: "SEND_ADDED_TITLE",
  data,
});

export const receiveAddedTitle = (data) => ({
  type: "RECEIVE_ADDED_TITLE",
  data,
});

export const receiveAddedTitleErr = (data) => ({
  type: "RECEIVE_ADDED_TITLE_ERR",
  data,
});
