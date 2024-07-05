import React, { useState, useEffect } from "react";
import video from "../src/assets/Fashion awarness.mp4";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import star_img from "../src/assets/star_vector.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

function signup() {
  const [isMuted, setIsMuted] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook

  // useEffect(() => {
  //   // Check if email state has changed (Google login resolved)
  //   if (email) {
  //     // Perform navigation to home component
  //     navigate("/home");
  //   }
  // }, [email, navigate]);

  const toggleMute = () => {
    setIsMuted((prevMuteState) => !prevMuteState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      navigate("/home");
      const response = await axios.post("http://localhost:4000", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        // Save the token to localStorage or state for future requests if needed
        localStorage.setItem("token", response.data.token); // Redirect to the home component
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = (data) => {
    setName(data.profile.name);
    setEmail(data.profile.email);
    setPassword(""); // Assuming you want to reset the password
  };

  return (
    <div className="signup_page">
      <div className="top_container">
        <div className="video_div">
          <video
            autoPlay
            className="video"
            onClick={toggleMute}
            muted={isMuted}
            height="100%"
          >
            <source id="d" src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="signup_div">
          <img className="star_img" src={star_img} alt="" />
          <div className="signup_header">
            <h2>Sign UP</h2>
            <h4>Beat Waste Pollution</h4>
          </div>
          <div className="signup_main">
            <form onSubmit={handleSubmit}>
              <label className="signup_label">Name</label>
              <input
              id="input_name_front"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="signup_label">Email Id</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="signup_label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="Sub_button" type="submit">
                Sign UP
              </button>
            </form>
          </div>
          <div className="or_signup">
            <div className="dash"></div>
            <div className="or_signin">Or</div>
            <div className="dash"></div>
          </div>
          <div className="google_signup">
            <LoginSocialGoogle
              client_id={"445247966928-bqhq10p73iorfg1bsq1qvmdk0t6u2bt4.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                navigate('/home')
                console.log(provider, data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>
          <div className="new_signin">
            <span>Already have an account? </span>
            <Link to="/login" className="new_sign_button">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="footer" id="f">
        <div>
          <span>Privacy Policy</span>
          <span>Terms & Condition</span>
          <span>Refund Policy</span>
        </div>
        <div>Pure Threads © 2024</div>
      </div>
    </div>
  );
}

export default signup;
