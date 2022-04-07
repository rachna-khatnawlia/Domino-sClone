import React from 'react';
import styles from '../styles/styles';
import GreenBtn from './GreenBtn';

import { View, Text, TouchableOpacity} from 'react-native';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";


// import { TouchableOpacity } from 'react-native-gesture-handler';

const Language = ({value}) => {
    return (
        <>    
            <ActionSheet id="language">
                <View style={{padding:30}}>

                <Text>CHOOSE LANGUAGE /</Text>

                <Text>Hello ActionSheet</Text>
                <GreenBtn value="CONTINUE IN ENGLISH"/>
                <Text>Language Options can be changed any time. We Will translate informationto help your browse and order. Please note that Translations have been provided for convenience only and ENglish verion of Domino's, including our conditions of use, is the definitive version.</Text>
                </View>

            </ActionSheet>
        </>
    );
};
export default Language;
