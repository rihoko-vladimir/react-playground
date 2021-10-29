import {Button, ButtonGroup} from "@mui/material";
import PropTypes from 'prop-types'

const Counter = (props) => (
    <div style={props.style} className={"mainContainer"}>
        <p className={"counter"}>{props.currentCount}</p>
        <ButtonGroup className={"buttonContainer"} size={"medium"} variant="outlined" color={"secondary"}>
            <Button onClick={() => props.onDecrementClicked()}>-</Button>
            <Button onClick={() => props.onResetClicked()}>Reset</Button>
            <Button onClick={() => props.onIncrementClicked()}>+</Button>
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