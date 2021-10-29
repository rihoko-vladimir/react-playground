import React from "react";
import "./styles.css";
import {Button, ButtonGroup} from "@mui/material";
import CounterContainer from "../../containers/CounterContainer";

export default class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [],
        };
        this.onCounterRemoved = this.onCounterRemoved.bind(this);
        this.onNewCounterAdded = this.onNewCounterAdded.bind(this);
        this.onCounterReset = this.onCounterReset.bind(this);
    }

    onNewCounterAdded() {
        this.setState(prevState => {
            let newElements = [];
            for (let i = 0; i < prevState.counters.length + 1; i++) {
                newElements.push(<CounterContainer event={"created"} {...this.props}/>)
            }
            return {
                counters: newElements,
            }
        })
    }

    onCounterReset() {
        this.setState({counters: []})
    }

    onCounterRemoved() {
        this.setState(prevState => {
            let newElements = [];
            for (let i = 0; i < prevState.counters.length - 1; i++) {
                newElements.push(<CounterContainer event={"removed"} {...this.props}/>)
            }
            return {
                counters: newElements,
            }
        });
    }

    render() {
        return (
            <div className={"container"}>
                <ButtonGroup variant={"outlined"} color={"secondary"}>
                    <Button onClick={this.onNewCounterAdded}>+</Button>
                    <Button onClick={this.onCounterReset}>Reset</Button>
                    <Button onClick={this.onCounterRemoved}>-</Button>
                </ButtonGroup>
                <div className={"counters"}>{this.state.counters}</div>
            </div>
        )
    }
}