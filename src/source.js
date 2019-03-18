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
      return Promise.reject(new Error('Data feed is currently unavailable'));
    }
  }),
};

export default AppDataSource;
