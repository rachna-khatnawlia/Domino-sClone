import React from 'react';
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import navigationStrings from './navigationStrings';

export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
    </>
  );
}
