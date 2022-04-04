import React, { useState } from "react";
import PhoneInput from "react-native-phone-number-input";

export default function MobileInput() {
    const [mob, setMob] = useState('')

    return (
        <>
            <PhoneInput
                placeholder={"Mobile No.*"}
                containerStyle={{ height: 48, width: '92%', borderRadius: 3 }}
                onChangeText={(value) => setMob(value)}
            />
        </>
    )
}