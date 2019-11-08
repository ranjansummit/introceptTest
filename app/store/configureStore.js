import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../component_scenes/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '../component_scenes/sagas/RootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(sagas);
  return store;
}
