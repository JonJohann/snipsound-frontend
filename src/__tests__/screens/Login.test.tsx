import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Login from '../../screens/Login';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<Login />', () => {
    const initialState = { output: 10 }
    const mockStore = configureStore()
    let store = mockStore(initialState)

    beforeEach(() => {
        jest.useFakeTimers()
    })
    it('has 2 children', () => {
        const tree = renderer.create(<Provider store={store}><Login /></Provider>).toJSON() as ReactTestRendererJSON;
        expect(tree!.children!.length).toBe(2);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
      });
      
});