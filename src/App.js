import './App.css';
import RouterTabs from "./views/RouterTabs/routerTabs";
import {Provider} from "react-redux";
import authStore from "./redux/store/authStore";

function App() {
    return (
        <Provider store={authStore}>
            <RouterTabs/>
        </Provider>
    );
}

export default App;
