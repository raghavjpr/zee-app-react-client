import { REGISTER_SUCCESS } from "../../../redux/types/userTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
