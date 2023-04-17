import { Link } from "react-router-dom";
// import Home from "../../pages/home/Home";
import "./topbar.css"

export default function topbar() {
  const user = true;
  return (
    <div className="top">
    <div className="topLeft">
      <i className="topicon fa-brands fa-square-facebook"></i>
      <i className="topicon fa-brands fa-square-twitter"></i>
      <i className="topicon fa-brands fa-square-pinterest"></i>
      <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link" to ="/">HOME</Link>
        </li>
        <li className="topListItem"><Link className="link" to ="/">ABOUT</Link></li>
        <li className="topListItem"><Link className="link" to ="/">CONTACT</Link></li>
        <li className="topListItem"><Link className="link" to ="write">WRITE</Link></li> 
        <li className="topListItem">
          {user && "LOGOUT"}
        </li>
      </ul>
    </div>
    <div className="topRight">
      {
        user ? (<img className="topimg"
      src="linkedin.jpg" alt="" />
      ):(
      <ul className="topList">
        <li className="topListItem">
      <Link className="link" to ="/login">LOGIN</Link></li>
      <li className="topListItem">
      <Link className="link" to ="/register">REGISTER</Link></li>
      
      </ul>
      )
      }
      
      <i className="topSearchicon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}
 