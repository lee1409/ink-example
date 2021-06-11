import React from "react";
import { Box, Text } from "ink";
import { UncontrolledTextInput } from "ink-text-input";
import ReduxContext from "../context";

export default function Question() {
  const context = React.useContext(ReduxContext);

  const handleSubmit = (message) => {
    context.question.cb(message);
  };
  return (
    <Box>
      <Box marginRight={1}>
        <Text>{context.question.text}</Text>
      </Box>
      <UncontrolledTextInput onSubmit={handleSubmit} />
    </Box>
  );
}
