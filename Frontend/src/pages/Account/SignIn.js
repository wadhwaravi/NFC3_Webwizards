import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import signInUser from "../../firebase/auth/authService";
const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Error Msg End here ===================

  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Clear any previous error or success messages
    setErrEmail("");
    setErrPassword("");
    setSuccessMsg("");

    if (!email) {
      setErrEmail("Please enter your email.");
      return;
    }

    if (!password) {
      setErrPassword("Please enter your password.");
      return;
    }

    // Simulate a successful sign-in
    setEmail("");
    setPassword("");
    try {
      await signInUser(email, password);
      setSuccessMsg(
        `Hello ${email}, you have signed in successfully! We are processing your request to access the Raction Ease app.`
      );
    } catch (err) {
      setErrEmail("Not registered user ");
      return;
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full lgl:w-1/2 h-full flex">
        {/* Left side with promotional content */}
        <div className="hidden lgl:flex flex-col items-center justify-center bg-primeColor text-white w-1/2 p-10">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-20 mb-4 h-15 " />
          </Link>
          <h1 className="text-2xl font-semibold mb-4">
            Welcome to Raction Ease
          </h1>
          <p className="text-lg mb-6">
            The Digital Ration Card System designed for Urban Slums.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-green-500" />
              <p className="text-lg">
                <strong>Efficient Ration Management</strong>
                <br />
                Simplify the process of ration distribution with a user-friendly
                digital platform.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-green-500" />
              <p className="text-lg">
                <strong>Easy Access to Services</strong>
                <br />
                Quickly access and manage your ration card information with
                ease.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-green-500" />
              <p className="text-lg">
                <strong>Designed for Urban Slums</strong>
                <br />
                Tailored to meet the needs of urban slum residents for better
                accessibility.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-between text-sm">
            <Link to="/" className="hover:text-gray-300">
              © Raction Ease
            </Link>
            <Link to="/terms" className="hover:text-gray-300">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-gray-300">
              Privacy
            </Link>
            <Link to="/security" className="hover:text-gray-300">
              Security
            </Link>
          </div>
        </div>

        {/* Right side with sign-in form */}
        <div className="w-full lgl:w-1/2 flex items-center justify-center p-8">
          {successMsg ? (
            <div className="w-full max-w-md mx-auto text-center">
              <p className="text-lg text-green-600 mb-4">{successMsg}</p>
              <Link to="/signup">
                <button className="w-full h-12 bg-primeColor text-gray-200 rounded-md font-semibold hover:bg-black hover:text-white duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSignIn}
              className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
            >
              <h1 className="text-2xl font-semibold mb-6 text-center">
                Sign In
              </h1>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  className={`w-full h-12 px-4 border rounded-md outline-none ${
                    errEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@workemail.com"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm mt-1">{errEmail}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className={`w-full h-12 px-4 border rounded-md outline-none ${
                    errPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                {errPassword && (
                  <p className="text-red-500 text-sm mt-1">{errPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-primeColor text-gray-200 rounded-md font-semibold hover:bg-black hover:text-white duration-300"
              >
                Sign In
              </button>
              <p className="text-sm text-center mt-4">
                Don't have an Account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
