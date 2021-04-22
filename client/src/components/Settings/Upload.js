import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
import { useSelector, useDispatch } from "react-redux";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";

const Upload = () => {
  let currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    setUserID(currentUser.user._id);
  }, []);

  const dispatch = useDispatch();
  const [userID, setUserID] = useState();
  const [preview, setPreview] = useState();
  const [src, setSrc] = useState();
  const [fileObj, setFileObj] = useState();
  const [url, setUrl] = useState();
  const onClose = () => {
    setPreview(preview);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("whoa! let's try a smaller file!");
      elem.target.value = "";
    } else {
      setFileObj(elem.target.files[0]);
    }
  };

  let sendURL;

  const labelStyle = {
    color: "blue",
  };
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
                setSrc();
                dispatch(receiveUserData(data.data));
                setPreview();
              } catch (err) {
                dispatch(receiveUserDataErr());
              }
            });
        }
      });
  };
  return (
    <Wrapper>
      <AvatarContainer>
        <h4>Upload new Avatar:</h4>
        <Avatar
          style={labelStyle}
          onClose={onClose}
          onCrop={onCrop}
          onBeforeFileLoad={onBeforeFileLoad}
          width={150}
          height={150}
          src={src}
        />
      </AvatarContainer>
      <Img>{preview && <img src={preview} alt="Preview" />}</Img>
      <button onClick={handleUpload} disabled={!fileObj ? true : false}>
        Upload
      </button>
    </Wrapper>
  );
};

export default Upload;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
    color: var(--orange);
    margin: 5px 0px;
  }

  label {
    color: var(--blue) !important;
  }
`;

const Uploader = styled.div``;

const AvatarContainer = styled.div`
  margin: 15px 0px;
  h3 {
    text-align: center;
    margin: 10px 0px;
    color: var(--orange);
    font-weight: bold;
  }
`;

const Img = styled.div`
  img {
    width: 150px;
    margin: 0 auto;
  }
`;
