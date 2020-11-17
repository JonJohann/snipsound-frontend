import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import RadioButton from '../../components/filtering/RadioButton';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('<RadioButton />', () => {
    const callback = jest.fn();
    const selected = false;
    const texts = "Rap";

    const props = {
        callback,
        selected,
        texts
    }
    it('calls callback on click', () => {
        const _component = shallow(<RadioButton {...props}/>)
        _component.simulate('press')
        expect(callback.mock.calls.length).toEqual(1)
    })

    it('renders correctly', () => {
        const _component = renderer.create(<RadioButton {...props}/>).toJSON();
        expect(_component).toMatchSnapshot();
    });

});