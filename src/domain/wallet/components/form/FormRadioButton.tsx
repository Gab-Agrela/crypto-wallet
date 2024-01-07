import { styled } from "styled-components";

const RadioButtonContainer = () => {
  return (
    <Container>
      <label>
        <HiddenRadioButton
          type="radio"
          name="radioButton"
          value="buy"
          required
        />
        <Span color="green">BUY</Span>
      </label>
      <label>
        <HiddenRadioButton type="radio" name="radioButton" value="sell" />
        <Span color="red">SELL</Span>
      </label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const HiddenRadioButton = styled.input`
  height: 25px;
  width: 25px;
  cursor: pointer;
  position: absolute;
  opacity: 0;
`;

const Span = styled.span`
  padding: 7px 17px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 50px 50px;
  font-size: 18px;
  background-color: silver;
  ${HiddenRadioButton}:checked + && {
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
  }
  &:hover {
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
    cursor: pointer;
  }
`;

export { RadioButtonContainer };
