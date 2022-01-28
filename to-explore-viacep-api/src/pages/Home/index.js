import React, { useState } from "react";
import Container from "./styles";
import Form from "../../components/Form";
import CustomModal from "../../components/CustomModal";
import api from "../../services/api";

function Home() {
  const [address, setAddress] = useState(null);

  return (
    <Container>
      <Form api={api} setAddress={setAddress} />
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
