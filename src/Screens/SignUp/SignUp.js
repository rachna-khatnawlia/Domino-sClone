import React from 'react';
// import styles from '../../styles/styles';

import SignupBody from '../../Components/SignupBody';
import SignupHeader from '../../Components/SignupHeader';

import {
    View,
    SafeAreaView
} from 'react-native';

export default function SignUp({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <SignupHeader navigation={navigation} />
                <SignupBody navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}
