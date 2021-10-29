import CounterContainer from "../../containers/CounterContainer";
import styles from "../Counter/styles.css";
import CounterParent from "../CounterParent";
import "./styles.css";

const CounterPage = () => (<div className={"counterPage"}>
    <div className={"task"}>
        <p className={"text"}>Task #1</p>
        <CounterContainer style={styles}/>
    </div>
    <div className={"task"}>
        <p className={"text"}>Task #2</p>
        <CounterParent style={styles}/>
    </div>
</div>);

export default CounterPage;