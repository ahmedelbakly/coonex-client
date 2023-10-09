import jwt_decode from "jwt-decode";
import axios from "axios";


//*************************************************************************************** */
// create axios interceptors to renew access token
export const axiosExpire = axios.create();
axiosExpire.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();

    const decoded = jwt_decode(localStorage.getItem("token"));
    if (decoded.exp * 1000 < currentDate.getTime()) {
      const data = await CreateRefreshToken();
      console.log(data);
      config.headers["Authorization"] = `${localStorage.getItem(
        "token"
      )}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


/////////////////////////////////////////////////////////////////////////////////
const CreateRefreshToken = async () => {
  try {
   axios.post("http://localhost:3001/refreshToken",{
    refreshToken: localStorage.getItem("reToken"),
    id: localStorage.getItem("coonexUId"),
  }).then(function (response) {
        const data = response.data;
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("reToken", data.refreshToken);
        console.log(data);
        return data;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};