import CounterContainer from "../../containers/CounterContainer";
import styles from "../Counter/styles.css";
import CounterParent from "../CounterParent";
import "./styles.css";

const CounterPage = () => (<div className={"counterPage"}>
    <CounterContainer style={styles}/>
    <CounterParent style={styles}/>
</div>);

export default CounterPage;