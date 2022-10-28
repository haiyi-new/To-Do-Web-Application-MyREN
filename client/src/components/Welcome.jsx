import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
  
  <div className="px-5 py-4 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome <strong>{user && user.name}</strong>!!</h1>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 className="display-6 fw-bold">Your Task..</h4>
        <br></br>
        <Link to="/tasks" className="btn btn-primary mx-2">
        See task list
      </Link>

  </div>

  
  );
};

export default Welcome;