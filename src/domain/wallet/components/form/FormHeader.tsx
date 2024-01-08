import { styled } from "styled-components";

const Header = ({ setVisible }: { setVisible: (c: boolean) => void }) => {
  return (
    <Container>
      <h2>Add new transaction</h2>
      <Button onClick={() => setVisible(false)}>Close</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid gray;
  h2 {
    font-size: 24px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  box-shadow: none;
  border-radius: 15%;
  border: 1px solid transparent;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    border-color: gray;
  }
`;

export { Header };
