import {Button, ButtonGroup} from "@mui/material";
import PropTypes from 'prop-types'

const Counter = (props) => (
    <div style={props.style} className={"mainContainer"}>
        <p className={"counter"}>{props.currentCount}</p>
        <ButtonGroup className={"buttonContainer"} color={"secondary"}>
            <Button variant="outlined" size={"medium"} onClick={() => props.onIncrementClicked()}>+</Button>
            <Button variant="outlined" size={"medium"} onClick={() => props.onDecrementClicked()}>-</Button>
            <Button variant="outlined" size={"medium"} onClick={() => props.onResetClicked()}>Reset</Button>
        </ButtonGroup>
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