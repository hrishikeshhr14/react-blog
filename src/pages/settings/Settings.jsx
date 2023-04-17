import "./settings.css"
import Sidebar from  "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
            <div className="settingsTittle">
                <span className="settingsUpdateTitle">Update Your Account </span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
           
    <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
            <img src="linkedin.jpg" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{dispalay:"none"}} />
        </div>
        <label>UserName</label>
        <input type="text" placeholder="hrishi"/>
        <label>Email</label>
        <input type="email" placeholder="21l701@kce.ac.in"/>
        <label>Password</label>
        <input type="password"/>
        <button className="settingssubmit">Update</button>
    </form>
    </div> 
    <Sidebar/>
    
    </div>
  )
}
