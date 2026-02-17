import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import SFNavbar from "./SFNavbar";
import SFFooter from "./SFFooter";
import SFHome from "./SFHome";

function App() {
  return (
    <>
      <div
        className="min-vh-100"
        style={{
          backgroundColor: "#030A35",
        }}
      >
        <SFNavbar />
        <SFHome />
        <SFFooter />
      </div>
    </>
  );
}

export default App;
