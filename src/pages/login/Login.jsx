import { Link } from "react-router-dom"

import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="LoginTiltle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type ="text" className="loginInput" placeholder="Enter your email.."/>
        <label>Password</label>
        <input type ="Password" className="loginInput "placeholder="Enter your password.."/>
        <button className="LoginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
      <Link className="link" to ="/register">Register</Link>
    </div>
  )
}
