import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { logOutUser, loginUser } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../images/upload.jpg"
const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .inputCon {
      width: 350px;
      height: 420px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 20px;
      border: 2px solid #e2e2e2;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      & input {
        display: none;
      }
      .img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      }
      & .btnCon {
        padding: 20px 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        
        & button , a {
          padding: 5px 25px;
          border: 1px solid #199956;
          border-radius: 7px;
          font-size: 16px;
          background: #f4f2f2;

          &:hover {
            background: #199956;
            color: #f4f2f2;
          }

        }
      }
    }
  `;
const AddAvatarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.userInfo);
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);
    formData.append("id", localStorage.getItem("coonexUId"));
    axios
      .post("http://localhost:3001/user/avatar", formData)
      .then((res) => {
        const data = res.data;
        dispatch(loginUser(data));
        navigate("/profile")
      }).catch((err) => console.error(err));
    setFile("");
  };

  
  return (
    <Container>
      <form className="inputCon" onSubmit={handleUpload}>
        <label htmlFor="avatar">{file ?<img className="img" src={URL.createObjectURL(file)} alt="" />:<img src={upload} alt="" />}</label>
        <input type="file" name="file" id="avatar" onChange={handleChange} />
        <div className="btnCon">
          <button type="submit">upload</button>
          <Link to="/profile">cancel</Link>
        </div>
      </form>
    </Container>
  );
};

export default AddAvatarPage;
