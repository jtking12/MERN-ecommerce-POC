import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Column } from "./components/Column";
import { SiteHeader } from "./components/SiteHeader";
import { Main } from "./pages/Main";
import { CheckOut } from "./pages/CheckOut";

function App() {
  return (
    <Router>
      <Column>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/check-out" element={<CheckOut />} />
        </Routes>
      </Column>
    </Router>
  );
}

export default App;
