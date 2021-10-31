import {TextField} from "@mui/material";
import PropTypes from "prop-types";

const MyInputField = ({onInputChanged, label, helperText, isError, currentValue}) => {
    const onChange = (event) => {
        onInputChanged(event.target.value);
    }
    return (
        <TextField variant={"outlined"}
                   color={"secondary"}
                   size={"medium"}
                   label={label}
                   helperText={helperText}
                   error={isError}
                   onChange={onChange}
                   fullWidth
                   value={currentValue}
        />
    )
}

MyInputField.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    helperText: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
    currentValue: PropTypes.string.isRequired,
};

export default MyInputField;