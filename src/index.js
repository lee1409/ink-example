import React from "react";
import {StoreStateProvider} from "./context";
import CLI from "./cli";
import { render } from "ink";
import logger from './logger';

function Index () {
  return (
    <StoreStateProvider>
      <CLI></CLI>
    </StoreStateProvider>
  );
}

render(<Index/>);
export default logger;