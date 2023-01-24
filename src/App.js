import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/navBar";

function App() {
  return (
    <div>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@500;800&display=swap"
          rel="stylesheet"
        />
      </header>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
