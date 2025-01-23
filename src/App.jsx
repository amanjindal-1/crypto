import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/home/homepage";
import Layout from "./components/layout";
import Activitypage from "./components/activitypage";
import Walletpage from "./components/wallet/walletpage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/activity" element={<Activitypage />} />
          <Route exact path="/wallet" element={<Walletpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
