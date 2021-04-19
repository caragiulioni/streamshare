import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
import { useSelector, useDispatch } from "react-redux";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";
import fill from "../../assets/fill.png";

const Upload = () => {
  let currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    setUserID(currentUser.user._id);
  }, []);

  const dispatch = useDispatch();
  const [userID, setUserID] = useState();
  const [preview, setPreview] = useState(fill);
  const [src, setSrc] = useState();
  const [fileObj, setFileObj] = useState();
  const [url, setUrl] = useState();

  const onClose = () => {
    setPreview(currentUser.user.avatar);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    // console.log(elem.target.value);
    const img = new Image();
    img.src = elem.target.value;
    const imgWidth = img.offsetWidth;
    // const imgHeight = img.naturalHeight;
    console.log(img);
    console.log(imgWidth);
    if (elem.target.files[0].size > 71680) {
      alert("whoa! let's try a smaller file!");
      elem.target.value = "";
    } else {
      console.log(elem.target.files[0]);
      setFileObj(elem.target.files[0]);
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
        const Obj = {
          userID: userID,
          avatar: data.url,
        };
        if (data) {
          sendUserData();
          fetch("/avatar", {
            method: "PUT",
            body: JSON.stringify(Obj),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              try {
                dispatch(receiveUserData(data.data));
              } catch (err) {
                dispatch(receiveUserDataErr());
              }
            });
        }
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
          width={150}
          height={150}
          src={src}
          style="font-weight: 200"
        />
      </AvatarContainer>
      <Img>
        <img src={preview} alt="Preview" />
      </Img>
      <button onClick={handleUpload} disabled={!fileObj ? true : false}>
        Upload
      </button>
    </div>
  );
};

export default Upload;

const Uploader = styled.div``;

const AvatarContainer = styled.div``;

const Img = styled.div``;