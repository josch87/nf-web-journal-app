import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
