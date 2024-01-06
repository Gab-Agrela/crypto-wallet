import { styled } from "styled-components";
import { Table } from "./components/Table";

const Home = () => {
  return (
    <Container>
      <h1>Top 100 Criptomoedas por Capitalização de Mercado</h1>
      <CriptoContainer>
        <Table />
      </CriptoContainer>
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

const CriptoContainer = styled.div`
  width: fit-content;
  height: 70%;
  margin-top: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    overflow: auto;
    white-space: nowrap;
  }
`;

export { Home };
