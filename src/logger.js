import {addLog} from './redux/actions';
import store from './redux';

class Logger {
  log (message) {
    store.dispatch(addLog(message));
  }
}

export default new Logger();