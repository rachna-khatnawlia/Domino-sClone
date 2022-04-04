import React, { useState } from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

import User from './User';
import GreenBtn from './GreenBtn';

export default function SignupBody({ navigation }) {
    const [name, setName] = useState('')
    const [mob, setMob] = useState('')
    const [pass, setPass] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(true)

    function handlePasswordEye() {
        if (passwordVisible) {
            setPasswordVisible(false)
        } else {
            setPasswordVisible(true)
        }
    }

    const [show, setShow] = useState(false)
    const Details = () => {
        if (name.length != 0) {
            { navigation.navigate('User', { fullname: name, mobile: mob, password: pass }) }
            // if (mob.length == 10) {
            //     // if(pass.length>=6)
            //     setShow(true);
            //     { navigation.navigate('User', { fullname: name, mobile: mob }) }
            // } else (
            //     setShow(false)
            // )
        } else {
            setShow(false)
        }
    }

    return (
        <View style={styles.signupBody}>
            <Image
                source={require('../assets/images/login/signupBg.jpeg')}
                style={styles.signupBgImg}
            />

            <View style={styles.loginBg}>
                {/* Mobile type input */}
                <PhoneInput
                    placeholder={"Mobile No.*"}
                    containerStyle={{ height: 70, width: '98%', borderRadius: 3 }}
                    onChangeText={(value) => setMob(value)}
                />
                {
                    // !show ? <Text style={{ textAlign: 'center', color: 'red' }}>Phone Number should have 10 digits</Text> : null
                }
                {/* Full Name */}
                <TextInput
                    style={styles.input}
                    placeholder={"Full Name"}
                    onChangeText={(value) => setName(value)}
                />
                {
                    !show ? <Text style={{ textAlign: 'center', color: 'red' }}>Invalid Name</Text> : null
                }

                {/* password eye working */}
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        onChangeText={(value) => setPass(value)}
                        secureTextEntry={passwordVisible}
                    />
                    <TouchableOpacity onPress={handlePasswordEye} style={{ position: 'absolute', right: 20, top: 21 }}>
                        <Image
                            source={(passwordVisible) ? require('../assets/images/login/hidePass.png') : require('../assets/images/login/showPass.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>

                {/* confirm password */}
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={"Repeat Password"}
                        onChangeText={(value) => setPass(value)}
                        secureTextEntry={passwordVisible}
                    />
                    <TouchableOpacity onPress={handlePasswordEye} style={{ position: 'absolute', right: 20, top: 21 }}>
                        <Image
                            source={(passwordVisible) ? require('../assets/images/login/hidePass.png') : require('../assets/images/login/showPass.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>


                <Text>Your name is {name}, Mobile no. is {mob}, and password is {pass}</Text>


                <TouchableOpacity onPress={Details}>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>Details</Text>
                    </View>
                </TouchableOpacity>


                <GreenBtn value="SUBMIT" />

                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.forget}>Already Have an Account? LOGIN</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}
