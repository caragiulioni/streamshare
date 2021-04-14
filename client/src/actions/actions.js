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
