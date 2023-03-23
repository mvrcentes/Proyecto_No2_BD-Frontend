import Navigation from "../navigation/Navigation"
import "./Menu.css"

function Menu() {
  return (
    <div className="menu">
        <Navigation />
        <div className="menu-container">
            <div className="information">
                <h1 className="consultas-medicas">Consultas Medicas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, at sem aenean sociosqu 
                    feugiat ultricies, gravida natoque molestie lectus ligula vitae. A pellentesque 
                    libero ullamcorper dictumst dignissim etiam, rutrum risus egestas viverra. Enim est 
                    vitae proin rutrum himenaeos fusce netus, aliquet dapibus nec auctor per euismod vel, 
                    erat porttitor aenean natoque malesuada cubilia.</p>
            </div>
        </div>
    </div>
  )
}

export default Menu