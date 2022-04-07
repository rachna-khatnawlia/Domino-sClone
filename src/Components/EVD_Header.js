import React from 'react';

import styles from '../styles/styles';

import ImagePath from '../constants/ImagePath';
import Toggle from './Toggle';

import { View, Text, TouchableOpacity, Image } from 'react-native';

const EVD_Header = ({ navigation }) => {
    return (
        <>
            <View style={[styles.expMenu]}>

                {/* Line 1 backward arrow and EVD heading */}
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
                        <Text style={styles.Headsection1btxt}>Everyday Value offers</Text>
                    </View>
                </View>


                {/* Line 2 Toggle button */}
                <Toggle />

            </View>


            {/* Line 3 filter option */}
            <View style={styles.Headsection3}>
                <View>
                    <Text>32 items</Text>
                </View>
                <View style={styles.flexRow}>
                    <Image source={ImagePath.filter} style={styles.Headsection3Img} />
                    <Text>Filter / Sort</Text>
                </View>
            </View>
        </>

    )
}

export default EVD_Header;