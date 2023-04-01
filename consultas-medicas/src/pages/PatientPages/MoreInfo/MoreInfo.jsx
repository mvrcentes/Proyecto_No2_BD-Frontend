import { Link } from "react-router-dom";

//view
import View from "../../../components/view/View";

//components
import CreateInfoCardView from "../../../components/Patient/createInfoCardView/CreateInfoCardView";

//menu
import menuOptions from "../MenuOptions";

//style
import './MoreInfo.css'

const MoreInfo = () => {

    return (
        <View menuOptions={menuOptions} key={0} tipo="normal">
            <div className="CreateInfoCardViewContainer">
                <CreateInfoCardView key={1} />
            </div>
        </View>
    );
};

export default MoreInfo;
