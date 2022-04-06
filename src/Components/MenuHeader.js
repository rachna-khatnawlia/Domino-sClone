import React, { useState } from 'react';

//importing external stylesheet
import styles from '../styles/styles';

//NavigationStrings
import navigationStrings from '../navigation/navigationStrings';

//importing flatlist
import ExpHeadData from '../assets/FlatListData/ExpHeadData';

import {
    Text,
    View, FlatList, Image, TouchableOpacity, TouchableOpacityBase
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import { useNavigation } from '@react-navigation/native';

export default function MenuHeader() {
    const [agree, setAgree] = useState(false);

    const handleCheckbox = () => {
        if (agree === false) {
            setAgree(true)

        } else {
            setAgree(false)
        }
    }
    console.log(agree);


    const navigation = useNavigation();

    return (
        <View style={styles.expMenu}>

            <View style={styles.Headsection1}>

                {/* Back to previous page */}
                <View style={styles.Headsection1a}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require('../assets/images/HeaderImages/backwardArrow.png')}
                            style={styles.Headsection1Img}
                        />
                    </TouchableOpacity>
                </View>

                {/* Explore Menu Heading */}
                <View style={styles.Headsection1b}>
                    <Text style={styles.Headsection1btxt}>Explore Menu</Text>
                </View>

                {/* Veg only Checkbox */}
                <View style={styles.Headsection1c}>
                    <CheckBox
                        style={styles.dotCheckBox}
                        boxType="square"
                        value={agree}
                        onChange={handleCheckbox}
                    />
                    <Text style={styles.Headsection1ctxt}>VEG ONLY</Text>
                </View>

                {/* Search Button */}
                <View style={styles.Headsection1d}>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SEARCH_MENU)}>
                        <Image
                            source={require('../assets/images/HeaderImages/search.png')}
                            style={styles.Headsection1Img}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.Headsection2}>
                <FlatList
                    horizontal={true}
                    style={{ paddingBottom: 10 }}
                    data={ExpHeadData}
                    renderItem={(main) => {
                        return (<View>
                            <Text style={styles.HeadSection2txt}>{main.item.title}</Text>
                        </View>
                        )
                    }}
                // numColumns={3}
                />
            </View>

        </View>
    );
};
