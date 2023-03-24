import Navigation from "../../navigation/Navigation"
import CreateRegisterView from "./CreateRegisterView"
import SearchBar from "../../searchBar/SearchBar"

import "./registerView.css"

const registerView = () => {
  return (
    <div className="registerView">
        <Navigation />
        <div className="searchBar">
            <SearchBar />
        </div>
        <div className="CreateRegisterViewContainer">
            <CreateRegisterView />
        </div>
    </div>
  )
}

export default registerView