import logger from "./src";
import { askQuestion } from "./src/question";

(async function () {
  logger.log("hello world");
  logger.log("Ababc");
  let name = await askQuestion("WHat is your name?");
  logger.log(name);
  let age = await askQuestion("What is your age?");
  logger.log(age);
})();
