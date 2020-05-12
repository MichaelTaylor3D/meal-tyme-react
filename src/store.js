import { observable, toJS } from "mobx";
import alt from "./alt";

import AppActions from "./actions";
import AppDataSource from "./source";

class AppStore {
  constructor() {
    this.state = observable({
      googleMapsApiKey: process.env.GOOGLE_API_KEY,
      globalProgress: false,
      globalMsg: "",
      feed: {},
    });

    this.bindActions(AppActions);
    this.registerAsync(AppDataSource);
  }

  onActivateGlobalProgress() {
    this.state.globalProgress = true;
  }

  onDeactivateGlobalProgress() {
    this.state.globalProgress = false;
  }

  onSetGlobalMsg(message) {
    this.state.globalMsg = message;
  }

  onGetAppFeed() {
    AppActions.activateGlobalProgress.defer();
    this.getInstance().getAppFeed();
  }

  onGetAppFeedSuccess(feedData) {
    this.state.feed = feedData;
    AppActions.deactivateGlobalProgress.defer();
  }

  // eslint-disable-next-line class-methods-use-this
  onGetAppFeedError(error) {
    AppActions.deactivateGlobalProgress.defer();
    AppActions.setGlobalMsg.defer(error.message);
  }

  static shouldShowGlobalProgress() {
    return this.getState().globalProgress;
  }

  static getGlobalMsg() {
    return this.getState().globalMsg;
  }

  static getFeed() {
    return toJS(this.getState().feed);
  }

  static getGoogleApiKey() {
    return this.getState().googleMapsApiKey;
  }
}

export default alt.createStore(AppStore);
