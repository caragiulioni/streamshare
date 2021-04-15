import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../Spinner";
const TitleFull = () => {
  console.log("USEFFECT running");
  const { titleId } = useParams();
  console.log("TITLE MAIN ID", titleId);
  const [title, setTitle] = useState();
  let history = useHistory();

  useEffect(() => {
    fetch(`/title/${titleId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [titleId]);

  return <div>TITLEMAIN</div>;
};

export default TitleFull;
