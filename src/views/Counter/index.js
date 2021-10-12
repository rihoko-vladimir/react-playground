import {Button} from "@mui/material";
import PropTypes from 'prop-types'

const Counter = (props) => (
    <div style={props.style} className={"mainContainer"}>
        <p className={"counter"}>{props.currentCount}</p>
        <div className={"buttonContainer"}>
            <Button variant="outlined" size={"medium"} onClick={() => props.onDecrementClicked()}>-</Button>
            <Button variant="outlined" size={"medium"} onClick={() => props.onResetClicked()}>Reset</Button>
            <Button variant="outlined" size={"medium"} onClick={() => props.onIncrementClicked()}>+</Button>
        </div>
    </div>
);

Counter.propTypes = {
    onDecrementClicked: PropTypes.func,
    onResetClicked: PropTypes.func,
    onIncrementClicked: PropTypes.func,
    style: PropTypes.object,
    currentCount: PropTypes.number,
};

export default Counter;