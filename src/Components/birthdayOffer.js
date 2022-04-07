import React from 'react';
// importing style
import styles from '../styles/styles';

import ImagePath from '../constants/ImagePath';

import {
    View,
    Image, TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';


const BirthdayOffer = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.EVD)}>
                <View>
                    <Image source={ImagePath.birthday} style={[styles.choosePizza, styles.brithdayPartyOffer]} />
                </View>
            </TouchableOpacity>
        </>

    );
};

export default BirthdayOffer;
