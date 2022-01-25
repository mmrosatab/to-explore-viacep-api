import "normalize.css";
import Container from "@mui/material/Container";
import ZipCode from "./components/ZipCode";
import Box from "@mui/material/Box";
import api from "../src/services/api";

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ZipCode api={api} />
      </Box>
    </Container>
  );
}

export default App;
