import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';

export default function SignupBody({ navigation }) {
    return (
        <View style={styles.signupBody}>

            <Image
                source={require('../assets/images/login/signupBg.jpeg')}
                style={styles.signupBgImg}
            />


            <View style={styles.loginBg}>
                <TextInput
                    style={styles.input}
                    placeholder={"Full Name"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Mobile No.*"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Repeat Password"}
                />
                <TouchableOpacity>
                    <View style={styles.logSignBtn}>
                        <Text style={styles.logBtntxt}>SUBMIT</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.forget}>Already Have an Account? Signup</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
