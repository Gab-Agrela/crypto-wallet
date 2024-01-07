import { styled } from "styled-components";

import { data } from "../../../../api/listingDataMock.json";
import { RadioButtonContainer } from "./FormRadioButton";

const Body = () => {
  return (
    <Container>
      <Label>
        Currency:
        <Select required>
          {data.map((curr) => (
            <option key={curr.name}>{curr.name}</option>
          ))}
        </Select>
      </Label>
      <RadioButtonContainer />
      <Label>
        Amount:
        <Input type="number" placeholder="Ex: 4.32" required />
      </Label>
      <Label>
        Price:
        <Input type="number" placeholder="Ex: 23423.22" required />
      </Label>
      <Button type="submit">Add Transaction</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 85%;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 5px;
  width: 60%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  background-color: silver;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid gray;
  padding: 5px;
  margin-left: 5px;
  outline: none;
  option {
    background-color: silver;
  }
  option:hover {
    background-color: yellow;
  }
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 50px 50px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-color: gray;
  }
`;

export { Body };
