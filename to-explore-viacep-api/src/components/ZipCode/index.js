import React, { useState } from "react";
import { TextField, FormControl, Button, Box } from "@mui/material";
import axios from "axios";

export default function ZipCode() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const request = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );
      if (request) setAddress(request.data);
    } catch (error) {
      console.log(error);
    }
    setZipCode("");
  }

  return (
    <>
      <FormControl component="form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="CEP"
          variant="outlined"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
        <Button
          type="submit"
          id="btn-submit"
          color="secondary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Procurar
        </Button>
      </FormControl>
    </>
  );
}
