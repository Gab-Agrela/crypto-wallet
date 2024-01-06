import { Route, Routes } from "react-router-dom";

import { Navbar } from "./commom/components/Navbar";
import { Home } from "./domain/home/Home";
import { Wallet } from "./domain/wallet/Wallet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}

export default App;
