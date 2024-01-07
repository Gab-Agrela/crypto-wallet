import { styled } from "styled-components";

const Header = ({ setVisible }: { setVisible: (c: boolean) => void }) => {
  return (
    <Container>
      <h1>Portfolio</h1>
      <span>
        <h1>Amount</h1>
        <h1>Variation</h1>
      </span>
      <button onClick={() => setVisible(true)}>Add new transaction</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  span {
    display: flex;
    flex-direction: row;
  }
`;

export { Header };
