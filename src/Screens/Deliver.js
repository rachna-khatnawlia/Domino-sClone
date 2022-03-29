import React from 'react';
import styles from '../styles/styles';

import{View, Image, Text, TouchableOpacity} from 'react-native';
import RadioForm,{RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const Deliver = () => {
    var deliver=[
        {label:"Delivery   ", value:"0"},
        {label:"Takeaway   ", value:"1"},
        {label:"Dine-In ", value:"2"},
      ];
    return (
        <View style={styles.deliver}>
            <View style={styles.deliverbox1}>

                <RadioForm style={styles.deliverRadios}
                    radio_props={deliver}
                    buttonSize={7}
                    labelColor="grey"
                    // padding={10}
                    selectedLabelColor="black"
                />
                
            </View>
            <View><Text>        </Text></View>
            <TouchableOpacity style={styles.deliverbox2}>
                <Image source={require('../assets/images/train.png')} style={styles.deliverbox2Img} />
                <Text style={{ fontSize: 11, lineHeight: 12, paddingLeft: 0}}>Deliver{'\n'}On Train</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Deliver;