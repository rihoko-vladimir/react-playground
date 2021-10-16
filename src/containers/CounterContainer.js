import React from "react";
import Counter from "../views/Counter";
import PropTypes from "prop-types";
import "react-dom";

export default class CounterContainer extends React.Component {
    state = {currentCount: 0,};

    constructor(props) {
        super(props);
        this.onDecrementClicked = this.onDecrementClicked.bind(this);
        this.onIncrementClicked = this.onIncrementClicked.bind(this);
        this.onResetClicked = this.onResetClicked.bind(this);
    }

    //this fucking shit does not work. idk what to do to make react call this garbage
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log(`${this.constructor.name} : ${this.UNSAFE_componentWillReceiveProps.name}`);
        if (nextProps.event === "created") {
            if (this.state.currentCount !== 0 && this.state.currentCount % 2 === 0) this.setState(prevState => ({currentCount: prevState.currentCount + 1,}));
        }
        if (nextProps.event === "removed") {
            if (this.state.currentCount % 2 !== 0) this.setState(prevState => ({currentCount: prevState.currentCount - 1,}));
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.currentCount !== nextState.currentCount;
    }

    onIncrementClicked() {
        this.setState(prevState => ({currentCount: prevState.currentCount + 1,}));
    }

    onDecrementClicked() {
        this.setState(prevState => ({currentCount: prevState.currentCount - 1,}));
    }

    onResetClicked() {
        this.setState({currentCount: 0,});
    }

    render() {
        return <Counter currentCount={this.state.currentCount} onDecrementClicked={this.onDecrementClicked}
                        onIncrementClicked={this.onIncrementClicked}
                        onResetClicked={this.onResetClicked} {...this.props}/>
    }

}

CounterContainer.propTypes = {
    style: PropTypes.object
};