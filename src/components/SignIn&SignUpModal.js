import React, { useState } from "react";
import { Modal } from "antd";
import SignIn from "./SignIn";
import SignUP from "./SignUp";
import { ToastContainer } from "react-toastify";

const SignInSignUpModal = ({ show, setOpen }) => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleOk = (e) => {
    setOpen(false);
  };

  const handleCancel = (e) => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={isSignInForm ? "Sign In to Flexifly" : "Sign up for Flexifly"}
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="text-center w-1/4"
      >
        {isSignInForm ? <SignIn setOpen={setOpen} /> : <SignUP setSignInForm={setSignInForm} />}
        <div className="flex items-center justify-end cursor-default">
          {isSignInForm ? (
            <>
              New User ?
              <span
                className=" rounded-lg ml-1 p-2 text-blue-500 cursor-pointer"
                onClick={() => {
                  setSignInForm((prev) => !prev);
                }}
              >
                Register here
              </span>
            </>
          ) : (
            <>
              Already Registered ?
              <span
                className=" rounded-lg ml-1 p-2 text-blue-500 cursor-pointer"
                onClick={() => {
                  setSignInForm((prev) => !prev);
                }}
              >
                Sign in
              </span>
            </>
          )}
        </div>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SignInSignUpModal;
