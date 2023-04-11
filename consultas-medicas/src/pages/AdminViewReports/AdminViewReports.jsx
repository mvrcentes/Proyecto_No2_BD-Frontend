//view
import View from "../../components/view/View"

//css
import "./AdminViewReports.css"

//sources
import menuOptions from "../../components/AdminView/MenuOptions";

const queryButton = () => {
    <button>
        Query 1 
    </button>
}

const AdminViewReports = () => { 
    return (
        <View menuOptions={menuOptions}>

        </View>
    )
}

export default AdminViewReports
