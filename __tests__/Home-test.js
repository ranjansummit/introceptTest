import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Home from '../app/component_scenes/pages/Home';
import { Text } from 'react-native'
import mockComponent from 'react-native/jest/mockComponent'

const mockStore = configureStore([]);
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
  //  it is just basically testing if the home  component is rendered correcly or not
  it('redered sucesfully', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(comp).toMatchSnapshot();


  });
});