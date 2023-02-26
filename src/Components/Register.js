import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const submithandler = (e) => {
    e.preventDefault();
    navigate("/confirmed", {
      state: { email: emailRef.current.value, name: nameRef.current.value },
    });
  };
  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={submithandler} autoComplete="off">
        <label>
          Username:
          <input type="text" name="username" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type={"submit"} value="Submit" />
      </form>
    </div>
  );
};

export default Register;
