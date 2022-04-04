import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

const User = ({route}) => {
    const {fullname, mobile, password} = route.params
    return(
        <View>
            <Text>Hello</Text>
            <Text>{fullname}</Text>
            <Text>{mobile}</Text>
            <Text>{password}</Text>

        </View>
    )
}
export default User;