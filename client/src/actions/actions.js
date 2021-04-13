export const receiveUserData = (data) => ({
  type: "RECEIVE_USER_DATA",
  data,
});

export const receiveUserDataErr = (data) => ({
  type: "RECEIEVE_USER_DATA_ERR",
  data,
});
