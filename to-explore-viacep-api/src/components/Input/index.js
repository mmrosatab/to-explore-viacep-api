import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

function Input({
  id,
  name,
  label,
  variant,
  value,
  arialLabel,
  dataTestId,
  handleInput,
}) {
  return (
    // <InputMask mask="99999-999" value={value} disabled={false} maskChar="-">
    //   {() => (

    //   )}
    // </InputMask>
    <TextField
      id={id}
      name={name}
      label={label}
      variant={variant}
      value={value}
      aria-label={arialLabel}
      inputProps={{ "data-testid": dataTestId }}
      onChange={handleInput}
    />
  );
}

export default Input;
