import MyTabs from "../../views/TabsPage/myTabs";
import PropTypes from "prop-types";
import "./styles.css";
const TabsContainer = (props) => {
    return (
        <div className={"parentContainer"}>
            <MyTabs/>
            {props.render}
        </div>
    )
}

TabsContainer.propTypes = {
    render : PropTypes.object,
}

export default TabsContainer;