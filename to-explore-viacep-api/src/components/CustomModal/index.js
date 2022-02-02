import { useState } from "react";
import { Box, Fade, Backdrop, Modal, Typography } from "@mui/material";
import CustomTable from "../Table";

function CustomModal({
  address,
  setAddress,
  ariaLabelledby,
  ariaDescribedby,
  dataTestId,
}) {
  const [open, setOpen] = useState(true);

  function handleClose() {
    setOpen(false);
    setAddress(null);
  }

  function DisplayData() {
    if (typeof address !== "string") {
      return <CustomTable address={address} />;
    }
    return <Typography id="invalid-cep">{address}</Typography>;
  }

  return (
    <Modal
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      open={open}
      onClose={handleClose}
      closeAfterTransition={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      data-testid={dataTestId}
    >
      <Fade in={open}>
        <Box sx={style}>{<DisplayData />}</Box>
      </Fade>
    </Modal>
  );
}

export default CustomModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
