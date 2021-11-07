import MyInputField from "../../views/MyInputField/MyInputField";
import {Button, Paper} from "@mui/material";
import "./styles.css";
import PropTypes from "prop-types";

const LoginFormContainer = (props) => {
    const state = props.state;
    const onLoginChanged = props.onLoginChanged;
    const onPasswordChanged = props.onPasswordChanged;
    const onSubmit = (event) => {
        props.onSubmit()
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
                                      currentValue={state.login}
                        />
                        <MyInputField label={"Password"} helperText={"Password must have at least 6 symbols"}
                                      isError={state.isPasswordError}
                                      onInputChanged={onPasswordChanged}
                                      currentValue={state.password}
                        />
                        <Button variant={"outlined"} color={"secondary"} type={"submit"}>Log in</Button>
                    </form>
                </div>
            </Paper>
            <p>
                Login: {state.login}
            </p>
            <p>
                Password: {state.password}
            </p>
        </>
    )
}

LoginFormContainer.propTypes = {
    state: PropTypes.object,
    onLoginChanged: PropTypes.func,
    onPasswordChanged: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default LoginFormContainer;