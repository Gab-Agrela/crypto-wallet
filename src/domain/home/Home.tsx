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

const Container = styled.div``;

const CriptoContainer = styled.div`
  border: 1px solid black;
`;

const CriptoTable = styled.table`
  border: 1px solid red;
  thead {
    font-size: 24px;
  }
  tbody {
    font-size: 20px;
  }
`;

export { Home };
