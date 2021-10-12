import React from "react";
import Counter from "../views/Counter";
import PropTypes from "prop-types";

export default class CounterContainer extends React.Component {
    state = {currentCount: 0,};

    constructor(props) {
        super(props);
        this.onDecrementClicked = this.onDecrementClicked.bind(this);
        this.onIncrementClicked = this.onIncrementClicked.bind(this);
        this.onResetClicked = this.onResetClicked.bind(this);
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