import './App.css';
import contentStyle from "./views/Counter/styles"
import CounterContainer from "./containers/CounterContainer";

function App() {
    return (
        <div style={{"display": "flex", "flex-direction": "row"}}>
            <CounterContainer style={contentStyle}/>
        </div>
    );
}

export default App;
