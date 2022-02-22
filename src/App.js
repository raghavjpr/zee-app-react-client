import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthRouters } from "./app/auth/routings/AuthRouters";
import Footer from "./app/core/components/layouts/Footer";
import Header from "./app/core/components/layouts/Header";
import Landing from "./app/core/components/layouts/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
