import React from 'react';
import User from '../Components/User';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import navigationStrings from './navigationStrings'


export default function AuthStack(Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.USER} component={User} options={{ headerShown: false }} />
            {/* <Stack.Screen name="User" component={User} options={{ headerShown: false }} /> */}

        </>
    );
}