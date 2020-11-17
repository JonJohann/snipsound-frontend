import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Recording from '../../screens/Recording';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<Recording />', () => {
    const initialState = {
        sounds: {
            user: ""
        }
    }
    beforeEach(() => {
    })
    const mockStore = configureStore()
    let store = mockStore(initialState)
    it('has 2 children', () => {
        const tree = renderer.create(<Provider store={store}><Recording /></Provider>).toJSON() as ReactTestRendererJSON;
        expect(tree!.children!.length).toBe(2);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Provider store={store}><Recording /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});