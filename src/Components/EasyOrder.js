import React from 'react';
import styles from '../styles/styles';

import { View, Text, TouchableOpacity } from 'react-native';

import Divider from 'react-native-elements/dist/divider/Divider';

const EasyOrder = () => {
  return (
    <View style={styles.easyOrderBlock}>
      <View>
        <Text style={styles.easyOrderHeading}>Easy Order</Text>
        <Text style={styles.orderNo}>Order No. 84</Text>
        <Text style={styles.text1}>5 Items {'\n'}Paneer & Onion, Capsicum, Onion</Text>
        <Divider width={1}></Divider>
      </View>

      <View>
        <Text style={styles.text1}>Order Placed on 1 January {'\n'}for Amount Rs. 389</Text>
        <TouchableOpacity style={styles.reorderTouchable}>
          <Text style={styles.reorder}>REORDER</Text>
        </TouchableOpacity>
        <Text style={styles.textUnderReorder}>View cart on next step.</Text>
      </View>
    </View>
  );
};
export default EasyOrder;
