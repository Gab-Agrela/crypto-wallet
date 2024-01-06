import { ReactElement } from "react";

const THead = (): ReactElement => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>24h</th>
        <th>Mkcap</th>
      </tr>
    </thead>
  );
};

export { THead };
