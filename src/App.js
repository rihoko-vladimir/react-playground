import './App.css';
import styles from "./views/Counter/styles.css";
import CounterContainer from "./containers/CounterContainer";
import CounterParent from "./views/CounterParent";

function App() {
    return (
        <div style={{"display": "flex", "flex-direction": "row"}}>
            <CounterContainer style={styles}/>
            <CounterParent style={styles}/>
        </div>
    );
}

export default App;
