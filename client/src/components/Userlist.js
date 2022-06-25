import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../Redux/action/useraction";
import Usercard from "./Usercard";
const Userlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, []);
  const users = useSelector((state) => state.users);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {users.map((el) => (
        <div key={el._id}>
          <Usercard el={el} />
        </div>
      ))}
    </div>
  );
};

export default Userlist;
