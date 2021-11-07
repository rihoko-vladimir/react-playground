import {useSelector} from "react-redux";

const ReduxSuccess = () => {
    const state = useSelector((state) => state.auth);
    return (
        <div>
            <p>{state.login}</p>
            <p>{state.password}</p>
        </div>
    );
}
export default ReduxSuccess;