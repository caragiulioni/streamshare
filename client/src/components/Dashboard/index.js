import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("DASHBOARD", currentUser);
  return <div>DASHBOARD</div>;
};

export default Dashboard;
