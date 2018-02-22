import 'react-native';
import React from 'react';
import introScreen from '../../src/screens/introScreen';

import renderer from 'react-test-renderer';

describe('IntroScreen Component', () =>{
  it('should not run a test to check a number', () => {
    const IntroScreenComponent = renderer.create(<IntroScren/>.toJSON);
    expect(IntroScreenComponent).toMatchSnapshot();
  })
})
