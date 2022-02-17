import { useState } from "react";
import { FormControl, Box } from "@mui/material";
import CustomButton from "../CustomButton";
import Input from "../Input";

function Form({ handleSubmit, setAddress }) {
  const [zipCode, setZipCode] = useState("");

  function zipCodeIsNotValid(value) {
    return value.length !== 8 || isNaN(value);
  }

  function clearInput() {
    setZipCode("");
  }

  async function onSubmit(event) {
    event.preventDefault();

    let value = onlyNumber();

    if (zipCodeIsNotValid(value)) {
      clearInput();
      setAddress("CEP inválido ou campo vazio");
      return;
    }

    const request = await handleSubmit(value);

    if (request === null || request.data?.erro) {
      setAddress("CEP inválido");
    } else {
      setAddress(request.data);
    }

    clearInput();
  }

  function onlyNumber() {
    return zipCode.replace("-", "");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormControl component="form" onSubmit={onSubmit}>
        <Input
          id="zipcode-input"
          name="zipcode"
          label="digite o cep aqui..."
          variant="outlined"
          value={zipCode}
          handleInput={(event) => setZipCode(event.target.value)}
          arialLabel="zipcode-input"
          dataTestId="zipcode-input"
        />
        <CustomButton
          id="search-btn"
          type="submit"
          color="secondary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          aria-label="search-btn"
          value="Procurar"
          dataTestId="search-btn"
        />
      </FormControl>
    </Box>
  );
}

export default Form;
