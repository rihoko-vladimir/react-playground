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

    componentDidMount() {
        console.log(`${this.constructor.name} : ${this.componentDidMount.name}`);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(`${this.constructor.name} : ${this.componentWillReceiveProps.name}`);
        if (nextProps.event === "created") {
            if (this.state.currentCount % 0 === 0) this.setState(prevState => ({currentCount: prevState + 1}))
        } else if (nextProps.event === "removed") {
            if (this.state.currentCount % 0 !== 0) this.setState(prevState => ({currentCount: prevState - 1}))
        } else {
            throw new Error("Illegal event name");
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(`${this.constructor.name} : ${this.shouldComponentUpdate.name}`);
        return this.state.currentCount !== nextState.currentCount;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`${this.constructor.name} : ${this.componentDidUpdate.name}`);
    }

    componentWillUnmount() {
        console.log(`${this.constructor.name} : ${this.componentWillUnmount.name}`);
    }

    static getDerivedStateFromProps(){
        console.log(`${this.constructor.name} : ${this.getDerivedStateFromProps.name}`);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`${this.constructor.name} : ${this.getSnapshotBeforeUpdate.name}`);
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
        console.log(`${this.constructor.name} : ${this.render.name}`);
        return <Counter currentCount={this.state.currentCount} onDecrementClicked={this.onDecrementClicked}
                        onIncrementClicked={this.onIncrementClicked}
                        onResetClicked={this.onResetClicked} {...this.props}/>
    }

}

CounterContainer.propTypes = {
    style: PropTypes.object
};