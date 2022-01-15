import "normalize.css";
import Container from "@mui/material/Container";
import ZipCode from "./components/ZipCode";
import Box from "@mui/material/Box";

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
        <ZipCode />
      </Box>
    </Container>
  );
}

export default App;
