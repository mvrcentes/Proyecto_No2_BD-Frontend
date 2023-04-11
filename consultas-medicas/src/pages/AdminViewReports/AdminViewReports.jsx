//view
import View from "../../components/view/View"

//css
import "./AdminViewReports.css"

//sources
import menuOptions from "../../components/AdminView/MenuOptions"

const QueryButton = () => {
    return (
        <button className="QueryButton">
            <div>Query 1</div>
        </button>
    )
}

const AdminViewReports = () => {
    return (
        <View menuOptions={menuOptions} key={0}>
            <div className="QueryButtonContainer">
                <QueryButton />
                <QueryButton />
                <QueryButton />
                <QueryButton />
                <QueryButton />
            </div>
        </View>
    )
}

export default AdminViewReports
