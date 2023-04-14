/** eslint-disable-file */
import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Header from "./components/Header";
// import Home from "./pages/Home";

import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/Pokemon_id";
import Notfound from "./pages/NotFound";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "./components/components/sidebar";
import AbecedaireMobile from "./pages/Abecedaire-mobile";

function App() {
  return (
    <>
      <>
        <Container fluid className="h-100 layout-overflow">
          <Row className="h-100">
            <Col lg="2" md="3" className="  p-0 m-0 ">
              <Header />
            </Col>
            <Col lg="10" md="9" className=" m-0 p-0 paddingB-layout">
              <>
                <Sidebar>
                  {" "}
                  <Routes>
                    <Route path="/abecedaire" element={<AbecedaireMobile />} />
                    <Route path="/*" element={<Notfound />} />
                    <Route path="/" element={<Pokedex />} />
                    <Route path="/:pokemonId" element={<PokemonId />} />
                  </Routes>{" "}
                </Sidebar>
              </>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
}

export default App;
