import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../App';

const mockStore = configureStore([]);
const store = mockStore({
  user: {},
  post: {},
});

describe('AppComponent', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
