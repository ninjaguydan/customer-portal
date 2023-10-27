import { Routes, Route, BrowserRouter as MyRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import "./global.css";

// Components
import SiteHeader from "./components/SiteHeader/SiteHeader";

//Pages
import Home from "./components/Pages/Home/Home";
import Policy from "./components/Pages/Policies/Policy";
import Policies from "./components/Pages/Policies/Policies";
import Settings from "./components/Pages/Settings/Settings";
import Billing from "./components/Pages/Billing/Billing";

export default function App() {
  return (
    <MyRouter>
      <SiteHeader />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy/:policyNumber" element={<Policy />} />
          <Route path="/policy" element={<Policies />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </main>
    </MyRouter>
  );
}
