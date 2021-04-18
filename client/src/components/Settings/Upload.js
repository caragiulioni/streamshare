import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
const Upload = ({ currentUser }) => {
  console.log(currentUser);
  const [preview, setPreview] = useState(currentUser.user.avatar);
  const [src, setSrc] = useState();
  const [toUpload, setToUpload] = useState();
  const onClose = () => {
    setPreview(currentUser.user.avatar);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const handleUpload = () => {
    console.log("click");
    fetch("/avatar", {
      method: "PUT",
      body: JSON.stringify(preview),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.status === 200) {
        // } else {
        //   return data.msg;
        // }
      });
  };
  return (
    <div>
      <AvatarContainer>
        Custom Avatar:
        <Avatar
          onClose={onClose}
          onCrop={onCrop}
          onBeforeFileLoad={onBeforeFileLoad}
          width={100}
          height={100}
          src={src}
          style="font-weight: 200"
        />
      </AvatarContainer>
      <Img>
        Current Avatar:
        <img src={preview} alt="Preview" />
      </Img>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;

const Uploader = styled.div``;

const AvatarContainer = styled.div``;

const Img = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;
