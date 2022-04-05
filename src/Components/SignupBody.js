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
    const [cpass, setcPass] = useState('')



    const [passwordVisible, setPasswordVisible] = useState(true)

    function handlePasswordEye() {
        if (passwordVisible) {
            setPasswordVisible(false)
        } else {
            setPasswordVisible(true)
        }
    }

    const [mobError, setmobError] = useState(false)
    const [nameError, setnameError] = useState(false)
    const [passError, setpassError] = useState(false)
    const [passDoesNotMatch, setpassDoesNotMatch] = useState(false)

    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const nameRegex = /^[a-zA-Z]{2,40}[ ]*([a-zA-Z]{2,40})+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    const Details = () => {
        if (phoneRegex.test(mob)) {
            setmobError(false)

            if (nameRegex.test(name)) {
                setnameError(false)

                if (passRegex.test(pass) && passRegex.test(cpass)) {
                    setpassError(false)
                    console.log('ok')
                    if (pass === cpass) {
                        setpassDoesNotMatch(false)

                        navigation.navigate('User', { fullname: name, mobile: mob, password: pass })
                        console.log("good to go");
                    }
                    else {
                        setpassDoesNotMatch(true)
                    }
                } else {
                    setpassError(true)
                }
            } 
            else {
                setnameError(true)
            }
        }
        else {
            setmobError(true)
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
                    mobError ? <Text style={{ textAlign: 'center', color: 'red' }}>Phone Number should have exactly 10 digits</Text> : null
                }
                {/* Full Name */}
                <TextInput
                    style={styles.input}
                    placeholder={"Full Name"}
                    onChangeText={(value) => setName(value)}
                />
                {
                    nameError ? <Text style={{ textAlign: 'center', color: 'red' }}>Name should have atleast 2 alphabets</Text> : null
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
                        onChangeText={(value) => setcPass(value)}
                        secureTextEntry={passwordVisible}
                    />
                    <TouchableOpacity onPress={handlePasswordEye} style={{ position: 'absolute', right: 20, top: 21 }}>
                        <Image
                            source={(passwordVisible) ? require('../assets/images/login/hidePass.png') : require('../assets/images/login/showPass.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>

                {
                    passError ?
                        <Text style={{ textAlign: 'center', color: 'red' }}>
                            Password should have atleast 8 digits, 1 capital letter, 1 lowerCase Letter and 1 special digit.
                        </Text>
                        : null
                }
                {
                    passDoesNotMatch ? <Text style={{ textAlign: 'center', color: 'red' }}>Password in both the fields must be same.</Text> : null
                }

                {/* <Text>Your name is {name}, Mobile no. is {mob}, and password is {pass}</Text> */}


                <TouchableOpacity onPress={Details}>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>Details</Text>
                    </View>
                </TouchableOpacity>


                {/* <GreenBtn value="SUBMIT" /> */}

                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.forget}>Already Have an Account? LOGIN</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}
