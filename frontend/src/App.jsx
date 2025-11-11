import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Column } from "./components/Column";
import { SiteHeader } from "./components/SiteHeader";
import { Main } from "./pages/Main";
import { CheckOut } from "./pages/CheckOut";
import { ViewOrders } from "./pages/ViewOrders";

function App() {
  return (
    <Router>
      <Column>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/orders" element={<ViewOrders />} />
          <Route path="/check-out" element={<CheckOut />} />
        </Routes>
      </Column>
    </Router>
  );
}

export default App;
