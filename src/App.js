import {useEffect, useState} from "react";
import Header from "./components/Header";
import Who from "./components/Who";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import Where from "./components/Where";

// import "./server"; // miragejs server

function App() {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/apply') {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfLYXyFD21hRxNxZRSoAA1UX7cAjDc_hcptE33wa8uK9y4Nvg/viewform';
    }
  }, [])

  return (
    <div className="app">
      <Header isPopupOpen={isPopupOpen}/>
      <Who/>
      <Where isPopupOpen={isPopupOpen} setIsPopUpOpen={setIsPopUpOpen}/>
      <Footer/>
      <ScrollUpButton/>
    </div>
  );
}

export default App;
