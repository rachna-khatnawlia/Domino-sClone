import React from 'react';
// import styles from '../../styles/styles';

import LoginHeader from '../../Components/LoginHeader';
import { View, Text, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import LoginBody from '../../Components/LoginBody';

export default function Login({navigation}) {
  return (
      <SafeAreaView>
    <View>
        <LoginHeader navigation={navigation}/>
        <LoginBody navigation={navigation}/>
    </View>
    </SafeAreaView>
  );
}
