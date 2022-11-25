import React from "react";
import { Container, Row } from "reactstrap";

import "./App.css";
import HomePage from "./Pages/HomePage";
import EstimationsPage from "./Pages/EstimationsPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./Components/navbarComponent/NavbarComponent";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <nav>
          <NavbarComponent />
        </nav>

        <Container>
          <Row>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/estimations" element={<EstimationsPage />} />
              <Route path="*" element={<p>404 route</p>}></Route>
            </Routes>
          </Row>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
