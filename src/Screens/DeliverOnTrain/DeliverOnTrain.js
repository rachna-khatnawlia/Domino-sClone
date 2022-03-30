import React from 'react';

//importing externnal file
import styles from "../../styles/styles";

import {
    SafeAreaView,
    StatusBar,
    Text, View, Image, TouchableOpacity
} from 'react-native';

import DeliverOnTrainHeader from '../../Components/DeliverOnTrainHeader';
import DeliverOnTrainBody from '../../Components/DeliverOnTrainBody';

const DeliverOnTrain = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar />

            {/* ---------->Deliver on Train Header------------------ */}
            <DeliverOnTrainHeader navigation={navigation} />

            {/* ---------->Deliver on Train Body------------------ */}
           <DeliverOnTrainBody navigation={navigation} />
           
        </SafeAreaView>
    );
};

export default DeliverOnTrain;