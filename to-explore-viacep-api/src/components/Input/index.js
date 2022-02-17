import { TextField } from "@mui/material";

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
