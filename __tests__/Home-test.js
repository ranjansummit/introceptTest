import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Home from '../app/component_scenes/pages/Home';
const mockStore = configureStore([]);
import fetch from 'cross-fetch';
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  it('redered sucesfully', () => {
  });
//   it('should dispatch an action on button click', () => {
//   });
});