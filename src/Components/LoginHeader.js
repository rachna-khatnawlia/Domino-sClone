import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function LoginHeader({ navigation }) {
    return (
        <View style={{ backgroundColor: '#2b63a0', paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500', textAlign: 'center' }}>
                Login Screen
            </Text>
        </View>
    );
}
