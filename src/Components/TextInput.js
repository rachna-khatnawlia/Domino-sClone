import React from "react";
import styles from "../styles/styles";
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';


export default function InputTypeText(value) {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder={value}
            />
        </>
    )
}