import './App.css';
import styles from "./views/Counter/styles.css";
import CounterContainer from "./containers/CounterContainer";

function App() {
    return (
        <div style={{"display": "flex", "flex-direction": "row"}}>
            <CounterContainer style={styles}/>
        </div>
    );
}

export default App;
