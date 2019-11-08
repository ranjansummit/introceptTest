import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../component_scenes/reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from '../rootSaga/RootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(sagas);
  return store;
}
