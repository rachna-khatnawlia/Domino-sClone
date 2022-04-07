import React from "react";

import styles from "../styles/styles";

import ImagePath from '../constants/ImagePath';
import EVD_data from "../assets/FlatListData/EVD_Data";

import { View, Text, Image, FlatList, ImageBackground, Pressable, ScrollView, TouchableOpacity } from "react-native";
const EVD_Body = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={[styles.container]}>

                    <FlatList
                        // horizontal = {true}
                        style={{ paddingBottom: 10 }}
                        data={EVD_data}
                        renderItem={(main) => {
                            return (
                                <View style={[styles.bestSellerCard, { opacity: 1 }]}>

                                    {/* Background image + text on EDV Card */}
                                    <ImageBackground
                                        source={main.item.url}
                                        style={styles.bestSellerCardImgedv}
                                    >

                                        <Image source={(main.item.veg) ? ImagePath.veg : ImagePath.nonVeg} style={{ height: 12, width: 12, left: 10, top: 7 }} />

                                        <View style={styles.section1edv}>
                                            <Text style={styles.section1aedv}>SAVE{'\n'}Rs.80</Text>
                                        </View>

                                        <Text style={styles.section2edv}>{main.item.cancelprice}</Text>

                                        <Text style={styles.bestSellerCardPrice}>{main.item.price}</Text>

                                        <Pressable style={styles.section3edv}>
                                            <Text style={{ fontSize: 12 }}>CUSTOMIZE</Text>
                                            <Image source={ImagePath.forwardArrow} style={styles.section3edvtxt} />
                                        </Pressable>

                                    </ImageBackground>

                                    <View style={{ padding: 10 }}>

                                        <Text style={styles.bestSellerCardtitle}>{main.item.title}</Text>

                                        <View style={[styles.flexRow, { paddingVertical: 5 }]}>
                                            <Text>{main.item.Description}</Text>
                                        </View>

                                        <View style={[styles.section4edv, styles.flexRow]}>
                                            <View>
                                                <Text style={styles.section4edv1txt}>Size</Text>
                                                <Text style={{ fontWeight: '400' }}>Medium</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.section4edv1txt}>Crust</Text>
                                                <View style={styles.flexRow}>
                                                    <Text style={{ fontWeight: '400' }}>New Hand Tossed</Text>
                                                    <Image
                                                        source={ImagePath.downwardArrow}
                                                        style={styles.section4edvDownArrow}
                                                    />
                                                </View>
                                            </View>

                                            <View style={{ alignSelf: 'center' }}>
                                                <TouchableOpacity style={styles.section4edvSelectBox}>
                                                    <Text style={styles.section4edvSelectBoxTxt}>SELECT</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default EVD_Body;