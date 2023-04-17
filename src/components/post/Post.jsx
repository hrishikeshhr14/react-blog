import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postimg
      " src="reactblog.jpg" alt="" />
    
    <div className="postinfo">
      <div className="postcats">
        <span className="postcat">Music </span>
        <span className="postcat">Life </span>
      </div>
      <span className="posttitle">
        Lorem ipsum dolor sit amet   
        </span>
        <hr/> 
        <span className="postdate">1 hour ago</span>
    </div> 
    <p className="postdesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Culpa molestiae, ipsa amet dolore maxime nesciunt obcaecati at soluta a incidunt nisi aliquam 
    quae tempore magni doloremque. Rerum cum ut sunt.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    At fugit repellendus corporis atque, aliquid facilis, possimus 
    deleniti pariatur sint quis ipsa magnam quae alias eos, amet 
    eum error optio sunt.</p>
    </div>
  )
}
