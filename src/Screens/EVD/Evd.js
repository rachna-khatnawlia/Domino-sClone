import React from 'react';

// importing FlatList Data
import EVD_Header from '../../Components/EVD_Header';

import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import EVD_Body from '../../Components/EVD_Body';


const Evd = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar />

            {/* EVD Header */}
            <EVD_Header navigation={navigation} />

            {/* EVD Body */}
            <EVD_Body navigation={navigation}/>

        </SafeAreaView>
    );
};

export default Evd;