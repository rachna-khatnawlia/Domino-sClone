import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

export default function LoginBody({ navigation }) {
    return (
        <View style={styles.LoginBody}>

            <Image
                    source={require('../assets/images/login/bg.jpeg')}
                    style={styles.loginBgImg}
            />
            
            <View style={styles.blockUnderLoginImg}>
                <Text style={styles.blockUnderLoginImg1}>WELCOME</Text>
                <Text style={styles.blockUnderLoginImg2}>Sign in to continue to Domino's</Text>
            </View>

            <View style={styles.loginBg}>
                <TextInput
                    style={styles.input}
                    placeholder={"Mobile No.*"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Domino's Password"}
                />
                <TouchableOpacity>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>SUBMIT</Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={{width:46}}>
                    <Pressable style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>Login</Text>
                    </Pressable>
                </View> */}
                <TouchableOpacity>
                    <Text style={styles.forget}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
