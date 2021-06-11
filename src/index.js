import React from "react";
import {StoreStateProvider} from "./context";
import CLI from "./cli";

export default function () {
  return (
    <StoreStateProvider>
      <CLI></CLI>
    </StoreStateProvider>
  );
}
