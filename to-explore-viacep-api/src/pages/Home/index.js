import React, { useState } from "react";
import Container from "./styles";
import Form from "../../components/Form";
import CustomModal from "../../components/CustomModal";
import api from "../../services/api";

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

  return (
    <Container>
      <Form
        dataTestId="zipcode-form"
        handleSubmit={handleSubmit}
        setAddress={setAddress}
      />
      {address !== null ? (
        <CustomModal
          ariaLabelledby="transition-modal-title"
          ariaDescribedby="transition-modal-description"
          address={address}
          setAddress={setAddress}
          dataTestId="modal-zipcode"
        />
      ) : (
        <React.Fragment />
      )}
    </Container>
  );
}

export default Home;
