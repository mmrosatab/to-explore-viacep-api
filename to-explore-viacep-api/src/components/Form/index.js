import { useState } from "react";
import { FormControl, Box } from "@mui/material";
import CustomButton from "../CustomButton";
import Input from "../Input";

function Form({ handleSubmit, setAddress }) {
  const [zipCode, setZipCode] = useState("");

  function zipCodeIsValid() {
    return zipCode.length !== 8;
  }

  function clearInput() {
    setZipCode("");
  }

  async function onSubmit(event) {
    event.preventDefault();

    if (zipCodeIsValid()) {
      clearInput();
      return;
    }

    const request = await handleSubmit(zipCode);

    if (request === null || request.data.erro) {
      setAddress("CEP inválido");
    } else {
      setAddress(request.data);
    }

    clearInput();
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
