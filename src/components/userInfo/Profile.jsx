import React from "react";
import { BsCamera } from "react-icons/bs";
import { styleVar } from "../../variableStyle";
import profile from "../../images/profile.png";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser, loginUser } from "../../redux/userSlice";
import { axiosExpire } from "../../axiosExpire";


const ImageCon = styled.div`

  width: 147px;
  height: 147px;
  border-radius: 50%;
  position: relative;
  margin: auto;
  & .add-img {
    display: none;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  & .conICon {
    position: absolute;
    top: 70%;
    right: 5%;
    background-color: ${styleVar.mainColor};
    font-size: 25px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    & .icon {
      color: white;
    }
  }
`

const FormCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  gap: 20px;
  & 
  & .passTitle {
    width: 100%;
    & h3 {
      color: #3d3d3d;
      font-size: 20px;
      font-weight: 600;
    }
  }
  & .data,
  .password {
    width: 100%;

    & .submit {
      padding: 5px 20px;
      background: #199956;
      color: white;
      font-size: 16px;
      font-weight: 500;
      margin-left: auto !important;
      border-radius: 5px;
      border: none;
    }
  }
`;
const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4%;

  & .input-con {
    width: 48%;
    & p {
    }
    & input {
      background: #f4f2f2;
    }
  }
`;
const TextFieldCon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  & p {
    color: #3d3d3d;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: left;
  }

  & input {
    width: 100%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    padding: 10px 15px;
    height: 100%;
  }
  & .input-box {
    width: 100%;
    position: relative;
    & .icon {
      position: absolute;
      top: 32%;
      right: 10px;
    }
  }
`;

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  // js code
  const navigate = useNavigate();
  const handleLink = (nav) => {
    navigate(nav);
  };

  /*//////////////////////////////////////////////////////////////////////////////*/
  const [showPass1, setShowPass1] = useState(false);
  const handleShowPass1 = (e) => {
    setShowPass1(!showPass1);
  };
  const [showPass2, setShowPass2] = useState(false);
  const handleShowPass2 = (e) => {
    setShowPass2(!showPass2);
  };
  const [showPass3, setShowPass3] = useState(false);
  const handleShowPass3 = (e) => {
    setShowPass3(!showPass3);
  };

  /*//////////////////////////////////////////////////////////////////////////////*/
  const [errorData, setErrorData] = useState("");
  const [massageData, setMassageData] = useState("");

  ////////////////////////////////////////////////////////////////////////////////////
  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
    phone: user.phone,
  });

  const handleSubmitData = (e) => {
    e.preventDefault();
    if (!userData.username || !userData.email || !userData.phone) {
     setErrorData("Please fill all the fields");
    } else {
      console.log(userData);
      
    }
    axiosExpire
      .patch("http://localhost:3001/user", userData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        const data = response.data;
        console.log(data);
        dispatch(loginUser(data.user));
        setMassageData(data.massage);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  /*//////////////////////////////////////////////////////////////////////////////*/

  const [userPassData, setUserPassData] = useState({
    currentPassword: "",
    password: "",
    confirmPass: "",
  });
  const [errorPass, setErrorPass] = useState("");
  const [massagePass, setMassagePass] = useState("");

  console.log(userPassData);
  const handleSubmitPass = (e) => {
    e.preventDefault();
if (!userPassData.currentPassword || !userPassData.password || !userPassData.confirmPass) {
    return  setErrorPass("Please fill all the fields");
    }
if ( userPassData.password !== userPassData.confirmPass) {
    return  setErrorPass(`Passwords do not match`);
    }
if ( userPassData.password.length < 8) {
    return  setErrorPass(` "password must be at least 8 characters"`);
    }
  

    axiosExpire
      .patch("http://localhost:3001/user/pass", userPassData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        const data = response.data;
        if (data.error) {
          return setErrorPass(data.error);
        }
        setMassagePass(data.massage);
      
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChangePass = (e) => {
    setUserPassData({ ...userPassData, [e.target.name]: e.target.value });
  };
  /*//////////////////////////////////////////////////////////////////////////////*/
  /*//////////////////////////////////////////////////////////////////////////////*/
  /*//////////////////////////////////////////////////////////////////////////////*/
  /*//////////////////////////////////////////////////////////////////////////////*/

  const [img, setImg] = useState("");

  const handleChangeImg = (e) => {
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("img", img);
    axios
      .post("http://localhost:3001/user/img", formData)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    setImg("");
  };
  //////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
    <ImageCon >
        <img src={`http://localhost:3001/images/${user.image}`} alt="" />
        <div className="conICon">
          <BsCamera className="icon" onClick={() => handleLink("/avatar")} />
        </div>
      </ImageCon>
    <FormCon onClick={()=>{
      setErrorPass("")
      setErrorPass("")
      setErrorData("")
      setMassageData("")
    }}>
      
      {/*///////////////////////////////////////////////////////////////////////////*/}
      <form className="data" onSubmit={handleSubmitData}>
      {errorData && (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              padding: "3px 0px",
              width: "max-content",
              textTransform: "capitalize",
              marginTop: "-10px",
              marginRight:"auto"
              
            }}
          >
            {errorData}
          </p>
        )}
        <InputsContainer>
          <TextFieldCon className="input-con">
            <p>Username</p>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </TextFieldCon>

          <TextFieldCon className="input-con">
            <p>Phone</p>
            <input
              type="text"
              id=""
              placeholder="add your phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          </TextFieldCon>
          <TextFieldCon className="input-con">
            <p>Email</p>
            <input
              type="email"
              id=""
              placeholder="your email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </TextFieldCon>
          <TextFieldCon className="input-con">
            <p>Account Type</p>
            <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
          </TextFieldCon>
        </InputsContainer>
        {massageData && (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              padding: "3px 0px",
              width: "max-content",
              textTransform: "capitalize",
              marginTop: "-10px",
              marginRight:"auto"
              
            }}
          >
            {massageData}
          </p>
        )}
        <input className="submit" type="submit" value="save change" />
      </form>

      {/*////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="passTitle">
        <h3>Change Password</h3>
      </div>
      {errorPass && (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              padding: "3px 0px",
              width: "max-content",
              textTransform: "capitalize",
              marginTop: "-10px",
              marginRight:"auto"
              
            }}
          >
            {errorPass}
          </p>
        )}
      <form className="password" onSubmit={handleSubmitPass}>
        <InputsContainer>
          <TextFieldCon className="input-con">
            <p>Current password</p>
            <div className="input-box">
              <input
                type={showPass1 ? "text" : "password"}
                id=""
                placeholder="current password"
                name="currentPassword"
                value={userPassData.currentPassword}
                onChange={handleChangePass}
              />
              {showPass1 === true ? (
                <AiOutlineEyeInvisible
                  className="icon"
                  onClick={handleShowPass1}
                />
              ) : (
                <AiOutlineEye className="icon" onClick={handleShowPass1} />
              )}
            </div>
          </TextFieldCon>
          <TextFieldCon className="input-con">
            <p>New secure password</p>
            <div className="input-box">
              <input
                type={showPass2 ? "text" : "password"}
                id=""
                placeholder="new password"
                name="password"
                value={userPassData.password}
                onChange={handleChangePass}
              />
              {showPass2 ? (
                <AiOutlineEyeInvisible
                className="icon"
                onClick={handleShowPass2}
              />
            ) : (
              <AiOutlineEye className="icon" onClick={handleShowPass2} />
              )}
            </div>
          </TextFieldCon>
          <TextFieldCon className="input-con">
            <p>Confirm New secure password</p>
            <div className="input-box">
              <input
                type={showPass3 ? "text" : "password"}
                id=""
                placeholder="confirm new password"
                name="confirmPass"
                value={userPassData.confirmPass}
                onChange={handleChangePass}
              />
              {showPass3 ? (
               <AiOutlineEyeInvisible
               className="icon"
               onClick={handleShowPass3}
             />
           ) : (
             <AiOutlineEye className="icon" onClick={handleShowPass3} />
              )}
            </div>
          </TextFieldCon>
        </InputsContainer>
        {massagePass && (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              padding: "3px 0px",
              width: "max-content",
              textTransform: "capitalize",
              marginTop: "-10px",
              marginRight:"auto"
              
            }}
          >
            {massagePass}
          </p>
        )}
        <input className="submit" type="submit" value="save change" />
      </form>
    </FormCon>
    </>
  );
};

export default Profile;
