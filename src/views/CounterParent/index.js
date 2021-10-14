import React from "react";
import "./styles.css";
import {Button, ButtonGroup} from "@mui/material";

export default class CounterParent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counters : [],
        };
    }
    render() {
        return (
            <div className={"countersContainer"}>
                <ButtonGroup variant={"outlined"}>
                    <Button onClick={this.onNewCounterAdded}>+</Button>
                    <Button onClick={this.onCounterReset}>Reset</Button>
                    <Button onClick={this.onCounterRemoved}>-</Button>
                </ButtonGroup>
            </div>
        )
    }
}