import { styled } from "styled-components";

import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { useState } from "react";
import { Form } from "./Form/Form";

const Wallet = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Container>
      <Header setVisible={setVisible} />
      <PortfolioContainer>
        <Table />
        <Form visible={visible} setVisible={setVisible} />
      </PortfolioContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 700px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const PortfolioContainer = styled.div`
  width: fit-content;
  height: 70%;
  margin-top: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    overflow: auto;
    white-space: nowrap;
  }
`;

export { Wallet };
