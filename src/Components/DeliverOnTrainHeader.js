import React from 'react';

//importing externnal file
import styles from "../styles/styles";
import ImagePath from '../constants/ImagePath';

import {
    Text, View, Image, TouchableOpacity
} from 'react-native';

const DeliverOnTrainHeader = ({ navigation }) => {
    return (
      
            // ---------->Deliver on Train Header------------------ 
            <View style={styles.expMenu}>
                <View style={styles.Headsection1}>
                    <View style={styles.Headsection1a}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                            <Image
                                source={ImagePath.backwardArrow}
                                style={styles.Headsection1Img}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Headsection1b}>
                        <Text style={styles.headerText}>Deliver On Train</Text>
                    </View>
                </View>
            </View>


    );
};

export default DeliverOnTrainHeader;