import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../compoments/Login";
import { Register } from "../compoments/Register";

export const AuthRouters = () => {
  console.log("Inside the AuthRouters");
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};
