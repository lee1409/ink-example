import store from "./redux";
import { setQuestion } from "./redux/actions";
// When question is created?
// Just dispatch to question mode


export const askQuestion = function (text) {
  let promise = new Promise((resolve, reject) => {
    store.dispatch(setQuestion(text, resolve));
  });
  return promise;
};
