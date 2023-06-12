import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FooterContent from "./components/FooterContent/FooterContent";

function App() {
  return (
    <>
      <Header>Journal</Header>
      <Footer>
        <FooterContent>Journal App — 2028</FooterContent>
      </Footer>
    </>
  );
}

export default App;
