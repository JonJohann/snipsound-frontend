import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import SoundDetailed from '../../screens/SoundDetailed';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<SoundDetailed />', () => {
    const initialState = {
        sounds: {
                posts: [],
                totalPages: 1,
                status: 'idle',
                error: "",
                user: ""
        },
        params: {
            sortby: "-date",
            search: "",
            category: "",
            limit: 5
        }
    }
    const callback = jest.fn()
    const initialPost = {
        _id: "",
        date: "",
        title: "",
        owner: "",
        filename: "",
        category: "",
        description: "",
        likes: 0,
    }

    beforeEach(() => {
        jest.useFakeTimers()
    })
    const mockStore = configureStore()
    let store = mockStore(initialState)
    it('has 2 children', () => {
        const tree = renderer.create(<Provider store={store}><SoundDetailed callback={callback} {...initialPost}/></Provider>).toJSON() as ReactTestRendererJSON;
        expect(tree!.children!.length).toBe(1);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Provider store={store}><SoundDetailed callback={callback} {...initialPost}/></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});