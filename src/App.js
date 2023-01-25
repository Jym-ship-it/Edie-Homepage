import "./App.css";
import NavBar from "./Components/navBar";
import Hero from "./Components/Hero";
import { Box } from "@mui/system";
import Services from "./Components/Services";
import Works from "./Components/Works";
import Team from "./Components/Team";
import Phrase from "./Components/Phrase";

function App() {
  const style = {
    mainCon: {
      margin: "96px 70px",
      "@media only screen and (max-width : 400px)": {
        margin: "48px 13.5px",
      },
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </header>
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <Works></Works>
      <Team></Team>
      <Phrase></Phrase>
    </Box>
  );
}

export default App;
