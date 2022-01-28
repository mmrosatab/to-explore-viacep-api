import { Button } from "@mui/material";

function CustomButton({
  id,
  type,
  color,
  variant,
  sx,
  value,
  ariaLabel,
  dataTestId,
}) {
  return (
    <Button
      id={id}
      type={type}
      color={color}
      variant={variant}
      sx={sx}
      aria-label={ariaLabel}
      data-testid={dataTestId}
    >
      {value}
    </Button>
  );
}

export default CustomButton;
