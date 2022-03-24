import React from 'react';

//importing external stylesheet
import styles from '../../styles';

//importing flatlist
import ExpHeadData from '../FlatListData/ExpHeadData';

import {
  Text,
  View, FlatList, Image, StyleSheet
} from 'react-native';
// import { CheckBox } from 'react-native-elements';

const MenuHeader = () => {
    return(
        <View style={styles.expMenu}>
            <View style={styles.Headsection1}>
                <View style={styles.Headsection1a}>
                    <Image 
                        source={require('../Images/HeaderImages/backwardArrow.png')}
                        style={styles.Headsection1Img}
                    />
                </View>
                <View style={styles.Headsection1b}>
                    <Text style={styles.Headsection1btxt}>Explore Menu</Text>
                </View>
                <View style={styles.Headsection1c}>
                    {/* <CheckBox title="hello" checked={false}/> */}
                    <Text style={styles.Headsection1ctxt}>
                        VEG ONLY</Text>
                </View>
                <View style={styles.Headsection1d}>
                    <Image 
                        source={require('../Images/HeaderImages/search.png')}
                        style={styles.Headsection1Img}
                    />
                </View>
            </View>

            <View style={styles.Headsection2}>
                <FlatList 
                    horizontal = {true}
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

export default MenuHeader;