import React, { useState } from 'react'
import styles from '../styles/styles'
import { View, Image, TextInput, TouchableOpacity} from 'react-native'

export default function Password(PlaceHolder) {
    const [pass, setPass] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(true)
    function handlePasswordEye(){
        if(passwordVisible){
            setPasswordVisible(false)
        }else{
            setPasswordVisible(true)
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={PlaceHolder}
                onChangeText={(value) => setPass(value)}
                secureTextEntry={passwordVisible}
            />
            <TouchableOpacity onPress={handlePasswordEye} style={{ position: 'absolute', right: 20, top: 21 }}>
                <Image
                    // source={(passwordVisible)?require('../assets/images/login/hidePass.png'):require('../assets/images/login/showPass.png')}
                    source={(passwordVisible) ? require('../assets/images/login/hidePass.png') : require('../assets/images/login/showPass.png')}
                    style={{ height: 15, width: 20 }}
                />
            </TouchableOpacity>
        </View>

    )
}