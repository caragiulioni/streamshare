import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Following = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [response, setResponse] = useState();
  console.log(currentUser);
  useEffect(() => {
    setResponse("loading");

    fetch(`following/${currentUser._id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Hey Buddy</div>;
};

export default Following;
