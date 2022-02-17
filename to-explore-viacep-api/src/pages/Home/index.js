import React, { useState } from "react";
import { Container, Title } from "./styles";
import Form from "../../components/Form";
import CustomModal from "../../components/CustomModal";
import api from "../../services/api";
import { Typography } from "@mui/material";

function Home() {
  const [address, setAddress] = useState(null);

  async function handleSubmit(zipCode) {
    try {
      const request = await api.get(`/${zipCode}/json/`);
      return request;
    } catch (error) {
      return null;
    }
  }

  function DisplayData() {
    if (address !== null) {
      return (
        <CustomModal
          ariaLabelledby="transition-modal-title"
          ariaDescribedby="transition-modal-description"
          address={address}
          setAddress={setAddress}
          dataTestId="modal-zipcode"
        />
      );
    }
    return <React.Fragment />;
  }

  return (
    <Container>
      <Title>
        <Typography variant="h3" component="h2">
          Buscar CEP
        </Typography>
      </Title>
      <Form
        dataTestId="zipcode-form"
        handleSubmit={handleSubmit}
        setAddress={setAddress}
      />
      {<DisplayData />}
    </Container>
  );
}

export default Home;
