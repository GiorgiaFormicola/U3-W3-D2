import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import SFNavbar from "./components/SFNavbar";
import SFFooter from "./components/SFFooter";
import SFHome from "./components/SFHome";
import SFNotFound from "./components/SFNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          className="min-vh-100 d-flex flex-column"
          style={{
            backgroundColor: "#030A35",
          }}
        >
          <SFNavbar />
          <Container fluid="lg" className="flex-grow-1 align-content-center">
            <Routes>
              <Route path="/" element={<SFHome />}></Route>
              {/* <Route path="/article/:articleID" element={<SFDetails />}></Route> */}
              <Route path="*" element={<SFNotFound />}></Route>
            </Routes>
          </Container>
          <SFFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
