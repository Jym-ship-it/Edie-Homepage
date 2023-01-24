import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/navBar";
import Hero from "./Components/Hero";
import { Box } from "@mui/system";

function App() {
  const style = {
    mainCon: {
      margin: "96px 70px",
    },
  };
  return (
    <Box sx={style.mainCon}>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </header>
      <NavBar></NavBar>
      <Hero></Hero>
    </Box>
  );
}

export default App;
