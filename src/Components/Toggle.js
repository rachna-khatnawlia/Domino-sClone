import React, { useState } from 'react';
import styles from '../styles/styles';
import { View, Switch, Text } from 'react-native';

export default function Toggle() {

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.Headsection2, styles.Headsection2evd]}>

      <Text style={[styles.Headsection2evdtxt, { color: (isEnabled) ? '#fff' : '#c4e36d' }]}>
        Regular Pizzas{'\n'}Starting @Rs. 99
      </Text>

      <View style={{ alignSelf: 'center' }}>
        <Switch
          trackColor={{ false: "#fff", true: "#fff" }}
          thumbColor={isEnabled ? "green" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: .8 }, { scaleY: .7 }] }}
        />
      </View>

      <Text style={[styles.Headsection2evdtxt, { color: (!isEnabled) ? '#fff' : '#c4e36d' }]}>
        Medium Pizzas{'\n'}Starting @Rs. 199
      </Text>
    </View>

  )
}