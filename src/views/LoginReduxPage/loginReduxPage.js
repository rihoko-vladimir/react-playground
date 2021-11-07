import LoginFormContainer from "../../containers/LoginFormContainer/LoginFormContainer";
import "./styles.css";
import {useDispatch, useSelector} from "react-redux";
import {changeLoginError, changePasswordError, changeLogin, changePassword} from "../../redux/slices/authSlice";
import {useHistory} from "react-router";
import {routes} from "../RouterTabs/routerTabs";

const LoginReduxPage = () => {
    const state = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const onLoginChanged = (text) => {
        dispatch(changeLogin({
            newLogin: text,
        }));
    };
    const onPasswordChanged = (text) => {
        dispatch(changePassword(
            {
                newPassword: text,
            }
        ));
    };
    const validateInput = (input) => new RegExp(/^.{6,}$/).test(input);
    const onSubmit = () => {
        let isLoginCorrect = validateInput(state.login);
        let isPasswordCorrect = validateInput(state.password);
        if (isLoginCorrect && isPasswordCorrect) {
            console.log(JSON.stringify({
                login: state.login,
                password: state.password,
            }));
            history.push(routes[7]);
        } else {
            dispatch(changeLoginError({
                isLoginError: !isLoginCorrect,
            }));
            dispatch(changePasswordError({
                isPasswordError: !isPasswordCorrect,
            }));
        }
    }
    return (
        <div className={"loginPageContainer"}>
            <LoginFormContainer onLoginChanged={onLoginChanged} onPasswordChanged={onPasswordChanged}
                                onSubmit={onSubmit} state={state}/>
        </div>
    )
}

export default LoginReduxPage;