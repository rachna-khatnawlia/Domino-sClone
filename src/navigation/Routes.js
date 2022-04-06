import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import userStatus from '../redux/reducers/auth';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
// import MainStack from './MainStack';
import NavigationUsingStack from './MainStack';

const Stack = createStackNavigator();

export default function Routes() {
    const userData = useSelector(state => state.userStatus)
    console.log(userData)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userData ? 
                    AuthStack(Stack):
                    MainStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}