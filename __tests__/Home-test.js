import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Home from '../app/component_scenes/pages/Home';
import { TouchableOpacity } from 'react-native'
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
  it('redered sucesfully', () => {
  });
  it('should add the number of tabledata items', () => {
    jest.mock('TouchableOpacity', () => mockComponent('TouchableOpacity'));
    const mockFn = jest.fn();
    expect(wrapper.state('tabledata')).toBe(undefined);
    const Component = <StyledButton onPress={mockFn}>Save your Detail</StyledButton>;
    const dom = renderer(Component);

    // const wrapper = shallow(<Home />);
    dom.simulate('press')
    // wrapper.find('Save your Detail').simulate('onPress');
    expect(wrapper.state('tabledata')).not(undefined);
  });
});