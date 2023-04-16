import View from "./View"

import Menu from "../../components/EmployeeView/Menu"

const EmployeeView = ({ children }) => {
    return <View menuOptions={Menu} children={children}></View>
}

export default EmployeeView
