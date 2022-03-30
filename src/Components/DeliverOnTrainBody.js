import React, { useState } from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Unorderedlist from 'react-native-unordered-list';


export default function DeliverOnTrainBody({ navigation }) {
    const [agree, setAgree] = useState(false);

    const handleCheckbox = () => {
        if (agree === false) {
            setAgree(true)

        } else {
            setAgree(false)
        }
    }
    console.log(agree);
    return (
        <View style={styles.LoginBody}>

            {/*-------------- Bannner IMAGE----------------*/}
            <View style={styles.dotBg}>
                <Image
                    source={require('../assets/images/DeliverOnTrain/deliverBg.jpeg')}
                    style={styles.dotBgImg}
                />
            </View>

            {/*--------------Enter PNR----------------*/}
            <View style={styles.whitedotbg}>
                <Text style={{ fontWeight: '500' }}>Enter PNR to get started.</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.txtAfterInputPNR}>Valid PNR Number is Mandatory.</Text>

                <View style={[styles.flexRow, { paddingTop: 15, paddingLeft: 7 }]}>
                    <View>
                        <CheckBox
                            style={styles.dotCheckBox}
                            boxType="square"
                            value={agree}
                            onChange={handleCheckbox}
                        />
                    </View>

                    <View>
                        <Text style={styles.dotChecktxt}>
                            I agree to the IRCTC Ordering Terms & Conditions
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={{ marginVertical: 7 }}>
                    <View style={styles.logSignBtn}>
                        <Text style={[styles.logBtntxt, { backgroundColor: 'green' }]}>SUBMIT</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/*--------------IRCTC Order History----------------*/}
            <TouchableOpacity 
                    onPress={() => Alert.alert("Looks like you haven't plaed any ordera within IRCTC yet.")}
                >
                <View style={[styles.whitedotbg, styles.flexRow,]}>
                    <View style={styles.dotHisTxt1}>
                        <Image
                            source={require('../assets/images/train.png')}
                            style={styles.footerImg}
                        />
                    </View>
                    <View style={styles.dotHisTxt2}>
                        <Text>IRCTC ORDER HISTORY</Text>
                    </View>
                    <View style={styles.dotHisTxt3}>
                        <Image
                            source={require('../assets/images/arrow.png')}
                            style={{
                                height: 15,
                                width: 15
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {/*--------------IRCTC Terms and Conditions----------------*/}
            <View style={styles.whitedotbg}>
                <Text style={styles.ulText1}>IRCTC Terms&Conditions</Text>

                <Unorderedlist style={styles.ul2}>
                    <Text style={styles.ul2txt}>Oredering is only allowed for stations which are catered by Domino's and are ahead by 2 hours or more.</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.ul2}>
                    <Text style={styles.ul2txt}>Delivery is available oly between 12:00 to 23:00 hours. the Order would get cancelled if train reaches selected station outside these operational hours.</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.ul2}>
                    <Text style={styles.ul2txt}>Cancellation is only permitted within 2 hours of actual arrival at station.</Text>
                </Unorderedlist>

                <TouchableOpacity>
                    <Text style={{ color: '#2b63a0', paddingTop: 10, fontWeight: '500' }}>READ MORE</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}
