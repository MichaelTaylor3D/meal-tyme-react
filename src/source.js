import request from 'superagent';
import { sourceMethod } from './lib/utils/async-actions';
import AppActions from './actions';

const host = 'http://sandbox.bottlerocketapps.com';

const AppDataSource = {
  ...sourceMethod('getAppFeed', AppActions, async () => {
    try {
      const res = await request.get(`${host}/BR_iOS_CodingExam_2015_Server/restaurants.json`);
      return res.body;
    } catch (err) {
      // We want to handle the error without throwing
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Data feed is currently unavailable');
    }
  }),
};

export default AppDataSource;
