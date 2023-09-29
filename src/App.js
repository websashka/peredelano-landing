import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Header from "./components/Header";
import Who from "./components/Who";
import Where from "./components/Where";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import Apply from "./components/Apply";

// import "./server"; // miragejs server

function App() {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  return (
  <Router>
    <div className="app">
      <Header isPopupOpen={isPopupOpen} />
      <Routes>
        <Route path="/apply" element={<Apply />} />
        <Route path="/" element={
        <>
          <Who />
          <Where isPopupOpen={isPopupOpen} setIsPopUpOpen={setIsPopUpOpen} />
          <Footer />
          <ScrollUpButton />
        </>
        } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
