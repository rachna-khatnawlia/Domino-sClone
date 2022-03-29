import React from 'react';
import {useSelector} from 'react-redux';
import {Login} from '../Screens';

import navigationStrings from './navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        // component={LoginLayoutFour}
        options={{headerShown: false}}
      />
    </>
  );
}
