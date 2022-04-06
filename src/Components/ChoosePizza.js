import React from 'react';
import styles from '../styles/styles';
import navigationStrings from '../navigation/navigationStrings';

import { View, Image, TouchableOpacity } from 'react-native';

const ChoosePizza = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.EVD)}>
      <View>
        <Image source={require('../assets/images/choosePizza.jpeg')} style={styles.choosePizza} />
      </View>
    </TouchableOpacity>

  );
};
export default ChoosePizza;
