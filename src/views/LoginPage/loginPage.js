import LoginFormContainer from "../../containers/LoginFormContainer/LoginFormContainer";
import "./styles.css";
import {useState} from "react";

const LoginPage = () => {
    const [state, setState] = useState({
        login: "",
        password: "",
        isLoginError: false,
        isPasswordError: false,
    });
    const onLoginChanged = (text) => {
        setState(prevState => ({
            login: text,
            password: prevState.password,
            isLoginError: false,
            isPasswordError: false,
        }))
    };
    const onPasswordChanged = (text) => {
        setState(prevState => ({
            login: prevState.login,
            password: text,
            isLoginError: false,
            isPasswordError: false,
        }));
    };
    const validateInput = (input) => new RegExp(/^.{6,}$/).test(input);
    const onSubmit = ()=>{
        let isLoginCorrect = validateInput(state.login);
        let isPasswordCorrect = validateInput(state.password);
        if (isLoginCorrect && isPasswordCorrect) {
            console.log(JSON.stringify({
                login: state.login,
                password: state.password,
            }));
            setState({
                login: "",
                password: "",
                isLoginError: false,
                isPasswordError: false,
            });
        } else {
            setState(prevState => ({
                login: prevState.login,
                password: prevState.password,
                isLoginError: !isLoginCorrect,
                isPasswordError: !isPasswordCorrect,
            }))
        }
    }
    return (
        <div className={"loginPageContainer"}>
            <LoginFormContainer onLoginChanged={onLoginChanged} onPasswordChanged={onPasswordChanged} state={state} onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage;