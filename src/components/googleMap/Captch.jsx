import React, { useState, useRef } from 'react';
 import Axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
const Captcha = () => {
  const [SuccessMsg, setSuccessMsg] = useState("")
  const [ErrorMsg, setErrorMsg] = useState("")
  const [valid_token, setValidToken] = useState([]);
  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (valid_token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form")
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot")
      }
    }
  }

  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`http://localhost:8000/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response['data']);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;
  return (
    <div>
    <h1>  {process.env.H}</h1>
      {/* <ReCAPTCHA
              className="recaptcha"
              sitekey={SITE_KEY}
              ref={captchaRef}
  />*/}
    </div>
  )
}

export default Captcha
