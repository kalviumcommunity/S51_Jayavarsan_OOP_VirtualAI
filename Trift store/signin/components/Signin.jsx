import React, { useState } from "react";
import video from "../src/assets/Fashion awarness.mp4";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import star_img from "../src/assets/star_vector.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import profile from "../src/assets/Ellipse 16.png"

function signin() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const  navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login',{email,password})
    .then(res => {
      console.log(res)
      if (res.data === "success"){
        navigate('/home')
      }
    })
  };
  return (
    <div className="signup_page">
      <div className="top_container">
        <div className="donor_div">
          <h1>Donor Leaderboard</h1>
          <div className="profile_name">
            <div className="profile">
              <div className="profile_img">
                <div className="profile_img_div">
                  <img src={profile} alt="" />
                  <div className="details_signin">
                    <h5>jv</h5>
                    <h6>User</h6>
                  </div>
                </div>
                <div className="profile_stat">
                  <span className="quotes">“</span>
                  <span className="s">Donated 200 shirts to this orphanage</span>
                </div>
              </div>
              <div className="profile_img">
                <div className="profile_img_div">
                  <img src={profile} alt="" />
                  <div className="details_signin">
                    <h5>jv</h5>
                    <h6>User</h6>
                  </div>
                </div>
                <div className="profile_stat">
                  <span className="quotes">“</span>
                  <span className="s">Donated 200 shirts to this orphanage</span>
                </div>
              </div>
              <div className="profile_img">
                <div className="profile_img_div">
                  <img src={profile} alt="" />
                  <div className="details_signin">
                    <h5>jv</h5>
                    <h6>User</h6>
                  </div>
                </div>
                <div className="profile_stat">
                  <span className="quotes">“</span>
                  <span className="s">Donated 200 shirts to this orphanage</span>
                </div>
              </div>
              <div className="profile_img">
                <div className="profile_img_div">
                  <img src={profile} alt="" />
                  <div className="details_signin">
                    <h5>jv</h5>
                    <h6>User</h6>
                  </div>
                </div>
                <div className="profile_stat">
                  <span className="quotes">“</span>
                  <span className="s">Donated 200 shirts to this orphanage</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="signup_div">
          <img className="star_img" src={star_img} alt="" />
          <div className="signup_header">
            <h2>Sign In</h2>
            <h4>Welcome back to purethreads4</h4>
          </div>
          <div className="signup_main">
            <form onSubmit={handleSubmit}>
              <label className="signup_label">Email Id</label>
              <input
                type="email"
                placeholder="  eg:jaya@purethreads.community"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="signup_label">PassWord</label>
              <input
                type="password"
                placeholder="  eg:Beat@123"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="Sub_button" type="submit">
                Sign In
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
            <span>Don't have Account? </span>
            <Link to="/" className="new_sign_button">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <span>Privacy Policy</span>
          <span>Terms & Condition</span>
          <span>Refund Policy</span>
        </div>
        <div>Pure Threads © 2024</div>
      </div>
    </div>
  )
}

export default signin