import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitile">ABOUT ME</span>
        <img className="sidebarimg" src="reactblog.jpg" alt="" />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime iure harum in omnis culpa fugiat recusandae minima. Ad totam labore sint autem veritatis eligendi qui perspiciatis quos corporis rerum?</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitile">CATEGORIES</span>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">Life</li>
            <li className="sidebarlistitem">Music</li>
            <li className="sidebarlistitem">Style</li>
            <li className="sidebarlistitem">Sport</li>
            <li className="sidebarlistitem">Tech</li>
            <li className="sidebarlistitem">Cinema </li> 
        </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitile"> FOLLOW  US</span>
        <div className="sidebarsocial">
        <i className="sidebaricon fa-brands fa-square-facebook"></i>
      <i className="sidebaricon fa-brands fa-square-twitter"></i>
      <i className="sidebaricon fa-brands fa-square-pinterest"></i>
      <i className="sidebaricon fa-brands fa-square-instagram"></i>
        </div>
    </div>
    </div>
  )
}
