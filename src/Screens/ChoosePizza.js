import React from 'react';
import styles from '../styles/styles';

import { View, Image } from 'react-native';

const ChoosePizza = () => {
  return (<View>
    <Image source={require('../assets/images/choosePizza.jpeg')} style={styles.choosePizza} />
  </View>

  );
};
export default ChoosePizza;
