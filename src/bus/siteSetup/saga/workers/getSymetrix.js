import {apply, put} from 'redux-saga/effects';

import {server} from '../../../../REST';

import {siteSetupActions} from '../../actions';

export function* getSymetrix() {
    try {
        const response = yield apply(server, server.getSymetrix);
        const data = response.data;

        if (response.status !== 200) {
            throw new Error(data);
        }

        yield put(siteSetupActions.setSymetrix(data));
    } catch (error) {
        console.error(error);
    }
}
