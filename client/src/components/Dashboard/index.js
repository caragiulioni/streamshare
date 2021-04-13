import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector((state) => state);
  console.log(currentUser);
  return <div>USERHOME</div>;
};

export default Dashboard;
