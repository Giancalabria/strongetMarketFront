import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
