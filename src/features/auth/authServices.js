import axios from "axios";

import { API_URL } from "../../constants/url";
import { REGISTER_ENDPOINT } from "../../constants/endpoints";

const register = (user) => {
  axios
    .post(`${API_URL}${REGISTER_ENDPOINT}`, user)
    .then((e) => {
      if (e.data.success) {
        //setLoading(false);
        //setShowCheck(true);
        // setTimeout(() => {
        //   //actions.resetForm();
        //   navigate("/login", {
        //     state: { showMsg: true },
        //   });
        // }, 400);
        return e.data;
      } else {
        // if (Object.keys(e.data.message)[0] === "email") {
        //   actions.setErrors({ email: e.data.message.email });
        // } else if (Object.keys(e.data.message)[0] === "username") {
        //   actions.setErrors({ username: e.data.message.username });
        // }
        //setShowFailed(true);
        //setLoading(false);
        // setTimeout(() => {
        //   setShowFailed(false);
        // }, 1000);
        return e.data.message;
      }
    })
    .catch((err) => {
      //   setLoading(false);
      //   setShowFailed(true);
      //   setTimeout(() => {
      //     setShowFailed(false);
      //   }, 1000);
      //   toast.error(`💣 oops! ${err.message}`, {
      //     toastId: "error1",
      //   });
      return err;
    });
};

const authServices = {
  register,
};

export default authServices;
