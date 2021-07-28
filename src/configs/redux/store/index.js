import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import {watcherSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export {store, persistor};

sagaMiddleware.run(watcherSaga);
