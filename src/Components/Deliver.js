import React from 'react';
import styles from '../styles/styles';

//common Links
import navigationStrings from '../navigation/navigationStrings';
import ImagePath from '../constants/ImagePath';

import{View, Image, Text, TouchableOpacity} from 'react-native';
import RadioForm,{RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const Deliver = ({navigation}) => {
    var deliver=[
        {label:"Delivery   ", value:"0"},
        {label:"Takeaway   ", value:"1"},
        {label:"Dine-In ", value:"2"},
      ];
    return (
        <View style={styles.deliver}>

            {/* Radio Buttons */}
            <View style={styles.deliverbox1}>
                <RadioForm style={styles.deliverRadios}
                    radio_props={deliver}
                    buttonSize={7}
                    labelColor="grey"
                    // padding={10}
                    selectedLabelColor="black"
                />   
            </View>

            {/* Delievr On Train */}
            <TouchableOpacity 
                onPress={()=>navigation.navigate(navigationStrings.DELIVER_ON_TRAIN)} 
                style={styles.deliverbox2}
            >
                <Image source={ImagePath.train} style={styles.deliverbox2Img} />
                <Text style={styles.deliverbox2Txt}>Deliver{'\n'}On Train</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Deliver;