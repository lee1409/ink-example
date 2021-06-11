import React from "react";
import { Text, Static } from "ink";
import StoreContext from "./context";

export default function CLI() {
  const context = React.useContext(StoreContext);

  return (
    <Static items={context.logs}>
      {(p, key) => <Text key={key}>{p}</Text>}
    </Static>
  );
}
