import React, { useState } from "react";




const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const nameRegex = /^[a-zA-Z]{2,40}[ ]*([a-zA-Z]{2,40})+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const FormValidation = () => {
    const [name, setName] = useState('')
    const [mob, setMob] = useState('')
    const [pass, setPass] = useState('')
    const [cpass, setcPass] = useState('')
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
            }
            else {
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
export default FormValidation;