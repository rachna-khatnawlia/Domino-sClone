import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../styles/styles";

const GreenBtn = ({value}) => {
    return(
        <>
           <TouchableOpacity>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>{value}</Text>
                    </View>
                </TouchableOpacity></>
    )
}
export default GreenBtn;