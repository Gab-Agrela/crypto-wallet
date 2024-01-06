import { ReactElement } from "react";
import { styled } from "styled-components";

const THead = (): ReactElement => {
  return (
    <Head>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>Market Cap</th>
      </tr>
    </Head>
  );
};

const Head = styled.thead`
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export { THead };
