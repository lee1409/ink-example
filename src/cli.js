import React from "react";
import { Text, Static, Box } from "ink";
import StoreContext from "./context";
import Question from "./components/question";

export default function CLI() {
  const context = React.useContext(StoreContext);

  return (
    <Box flexDirection={"column"}>
      <Box>
        <Static items={context.logs}>
          {(p, key) => <Text key={key}>{p}</Text>}
        </Static>
      </Box>
      {context.status === "question" && <Question />}
    </Box>
  );
}
