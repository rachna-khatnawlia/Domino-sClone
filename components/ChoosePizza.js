import React from 'react';
import styles from '../styles.js';

import { View, Image, Text} from 'react-native';

const ChoosePizza = () => {
  return (<View>
    <Image source={require('./Images/choosePizza.jpeg')} style={styles.choosePizza} />
  </View>

  );
};
export default ChoosePizza;
