import React from 'react';
import renderer from 'react-test-renderer';
import { Keyboard } from 'react-native';
import KeyboardHide from '../../components/recording/KeyboardHide';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('<KeyboardHide />', () => {
    const setVisibleKeyboard = jest.fn();
    const visibleKeyboard = false;

    const props = {
        setVisibleKeyboard,
        visibleKeyboard,
    }
    jest.mock('react-native');
    
    jest.mock('react-native', () => ({
        NativeModules: {
          RNPasscodeStatus: {
            supported: jest.fn(),
            status: jest.fn(),
            get: jest.fn(),
          }
        },
        StyleSheet: {
          create: () => ({})
        },
        Platform: {
          OS: jest.fn(() => 'ios'),
          version: jest.fn(() => 25),
        },
      }));

    const mockKeyboardDismiss = Keyboard.dismiss as jest.MockedFunction<typeof Keyboard.dismiss>;
    it('calls setVisibleKeyboard on click', () => {
        const _component = shallow(<KeyboardHide {...props}/>)
        _component.simulate('press')
        expect(setVisibleKeyboard).toHaveBeenCalledTimes(1)
    })

    it('renders correctly', () => {
        const _component = renderer.create(<KeyboardHide {...props}/>).toJSON();
        expect(_component).toMatchSnapshot();
    });

});