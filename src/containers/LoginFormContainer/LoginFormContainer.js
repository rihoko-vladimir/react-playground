import MyInputField from "../../views/MyInputField/MyInputField";
import {Button, Paper} from "@mui/material";
import {useState} from "react";
import "./styles.css";

const LoginFormContainer = () => {
    const [state, setState] = useState({
        loginText: "",
        passwordText: "",
        isLoginError: false,
        isPasswordError: false,
    });
    const onLoginChanged = (text) => {
        setState(prevState => ({
            loginText: text,
            passwordText: prevState.passwordText,
            isLoginError: false,
            isPasswordError: false,
        }));
    };
    const onPasswordChanged = (text) => {
        setState(prevState => ({
            loginText: prevState.loginText,
            passwordText: text,
            isLoginError: false,
            isPasswordError: false,
        }));
    };
    const validateInput = (input) => new RegExp(/^.{6,}$/).test(input);
    const onSubmit = (event) => {
        let isLoginCorrect = validateInput(state.loginText);
        let isPasswordCorrect = validateInput(state.passwordText);
        if (isLoginCorrect && isPasswordCorrect) {
            console.log(JSON.stringify({
                login: state.loginText,
                password: state.passwordText,
            }));
            setState({
                loginText: "",
                passwordText: "",
                isLoginError: false,
                isPasswordError: false,
            });
        } else {
            setState(prevState => ({
                loginText: prevState.loginText,
                passwordText: prevState.passwordText,
                isLoginError: !isLoginCorrect,
                isPasswordError: !isPasswordCorrect,
            }))
        }

        event.preventDefault();
    }
    return (
        <>
            <Paper elevation={6}>
                <div className={"loginContainer"}>
                    <form onSubmit={onSubmit} className={"formContainer"}>
                        <MyInputField label={"Login"} helperText={"Email must have at least 6 symbols"}
                                      isError={state.isLoginError}
                                      onInputChanged={onLoginChanged}
                                      currentValue={state.loginText}
                        />
                        <MyInputField label={"Password"} helperText={"Password must have at least 6 symbols"}
                                      isError={state.isPasswordError}
                                      onInputChanged={onPasswordChanged}
                                      currentValue={state.passwordText}
                        />
                        <Button variant={"outlined"} color={"secondary"} type={"submit"}>Log in</Button>
                    </form>
                </div>
            </Paper>
            <p>
                Login: {state.loginText}
            </p>
            <p>
                Password: {state.passwordText}
            </p>
        </>
    )
}

export default LoginFormContainer;