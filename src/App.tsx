import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

import { Navbar } from "./commom/components/Navbar";
import { Home } from "./domain/home/Home";
import { Wallet } from "./domain/wallet/Wallet";
import { useState } from "react";
import { PortfolioContext, TransactionType } from "./context/PortfolioContext";

function App() {
  const [portfolio, setPortfolio] = useState<Array<TransactionType>>([]);

  return (
    <PortfolioContext.Provider value={{ portfolio, setPortfolio }}>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </Container>
    </PortfolioContext.Provider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
