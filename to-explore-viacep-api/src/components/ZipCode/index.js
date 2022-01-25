import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomTable from "../Table";

export default function ZipCode({ api }) {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState(null);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
    setAddress(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const request = await api.get(`/${zipCode}/json/`);
      if (request) setAddress(request.data);
    } catch (error) {
      setAddress("CEP inválido");
    }

    setOpen(true);
    setZipCode("");
  }

  return (
    <>
      <FormControl component="form" onSubmit={handleSubmit}>
        <TextField
          id="cep-input"
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
          aria-label="btn-submit"
        >
          Procurar
        </Button>
      </FormControl>
      {typeof address !== "string" && address !== null ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <CustomTable address={address} />
            </Box>
          </Fade>
        </Modal>
      ) : (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="modal-modal-description">{address}</Typography>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
