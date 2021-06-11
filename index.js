import React from 'react';
import { render } from 'ink';
import Index from './src/index';
import logger from './src/logger';

render(<Index/>);
logger.log("Hello world");
logger.log("ABABABAB");
