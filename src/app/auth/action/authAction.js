import axios from "axios";
import { REGISTER_SUCCESS } from "../../../redux/types/userTypes";

export const register = (formData) => (dispatch) => {
  try {
    const res = await axios.post("/users", formData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {}
};
