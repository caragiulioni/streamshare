import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyTitles = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("MYTITLES", currentUser);
  return <div>MyTitles</div>;
};

export default MyTitles;
