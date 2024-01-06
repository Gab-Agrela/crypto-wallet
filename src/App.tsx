import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

import { Navbar } from "./commom/components/Navbar";
import { Home } from "./domain/home/Home";
import { Wallet } from "./domain/wallet/Wallet";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wallet" element={<Wallet />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
