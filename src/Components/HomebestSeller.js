import React from 'react';

// importing style
import styles from '../styles/styles';


import Best_Sellers from '../assets/FlatListData/Bestsellers.js';

import {
    View,
    Text,
    FlatList, ImageBackground, Pressable
} from 'react-native';
//import { useDispatch } from 'react-redux';



const HomebestSeller = ({ navigation }) => {
    // const dispatch = useDispatch()
    return (
        <>
            {/* Best Sellers */}
            <Text style={styles.exploreheading}>Bestsellers</Text>
            <View>
                <FlatList horizontal={true}
                    data={Best_Sellers}
                    renderItem={(seller) => {
                        return (<View style={styles.bestsellersDiv}>
                            <ImageBackground source={seller.item.url} style={styles.bestsellersImg}>
                                <View style={styles.bestsellersImgText1}>
                                    <Text style={styles.bestsellersImgText}>{seller.item.title}</Text>
                                </View>
                            </ImageBackground>
                            <Pressable>
                                <Text style={styles.bestsellersButton}>ADD</Text>
                            </Pressable>
                        </View>
                        )
                    }}
                />
            </View>
        </>

    );
};

export default HomebestSeller;
