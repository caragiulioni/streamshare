import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
const Upload = ({ currentUser }) => {
  const [preview, setPreview] = useState(currentUser.user.avatar);
  const [src, setSrc] = useState();
  const [fileObj, setFileObj] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {}, [setSrc]);
  const onClose = () => {
    setPreview(currentUser.user.avatar);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  let canvas;
  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      setFileObj(elem.target.files[0]);
      let canvas = elem.target.value;
    }
  };

  let sendURL;
  const handleUpload = () => {
    //send to clouddinary
    const data = new FormData();
    data.append("file", fileObj);
    data.append("upload_preset", "streamshare");
    data.append("cloud_name", "blockcontrol");
    fetch("https://api.cloudinary.com/v1_1/blockcontrol/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        fetch("/avatar", {
          method: "PUT",
          body: JSON.stringify(data.url),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
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
          width={75}
          height={75}
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
  width: 75px;
  img {
    width: 100%;
  }
`;
