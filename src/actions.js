import alt from './alt';
import { asyncActions } from './lib/utils/async-actions';

class AppActions {
  constructor() {
    this.generateActions(
      'activateGlobalProgress',
      'deactivateGlobalProgress',
      'setGlobalMsg',
      ...asyncActions('loginUser'),
      ...asyncActions('getAppFeed'),
    );
  }
}

export default alt.createActions(AppActions);
