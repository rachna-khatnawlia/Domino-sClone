import React from 'react';

//importing external stylesheet
import styles from '../styles/styles';

//importing flatlist
import ExpHeadData from '../assets/FlatListData/ExpHeadData';

import {
    Text,
    View, FlatList, Image, TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function MenuHeader() {
    const navigation = useNavigation();

    return (
        <View style={styles.expMenu}>

            <View style={styles.Headsection1}>

                <View style={styles.Headsection1a}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require('../assets/images/HeaderImages/backwardArrow.png')}
                            style={styles.Headsection1Img}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.Headsection1b}>
                    <Text style={styles.Headsection1btxt}>Explore Menu</Text>
                </View>

                <View style={styles.Headsection1c}>
                    {/* <CheckBox title="hello" checked={false}/> */}
                    <Text style={styles.Headsection1ctxt}>VEG ONLY</Text>
                </View>

                <View style={styles.Headsection1d}>
                    <Image
                        source={require('../assets/images/HeaderImages/search.png')}
                        style={styles.Headsection1Img}
                    />
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
