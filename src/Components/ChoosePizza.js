import React from 'react';
import styles from '../styles/styles';
import navigationStrings from '../navigation/navigationStrings';
import ImagePath from '../constants/ImagePath';

import { View, Image, TouchableOpacity } from 'react-native';

const ChoosePizza = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.EVD)}>
      <View>
        <Image source={ImagePath.choosePizza} style={styles.choosePizza} />
      </View>
    </TouchableOpacity>

  );
};
export default ChoosePizza;
