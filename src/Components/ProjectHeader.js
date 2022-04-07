import React from 'react';
import styles from '../styles/styles';

import { View, Text, Image, TouchableOpacity} from 'react-native';

import { SheetManager } from "react-native-actions-sheet";

import navigationStrings from '../navigation/navigationStrings';
import Language from './Language';
import ImagePath from '../constants/ImagePath';


const ProjectHeader = ({navigation}) => {
    function ShowActionSheet(){
        SheetManager.show("language");
    }
    return (
        <View style={styles.headerBox}>

            {/* -----------------------Drawer Show Icon--------------------------- */}
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer(navigationStrings.DRAWER)}>
                    <Image source={ImagePath.ashowDrawer} style={styles.headerImage} />
                </TouchableOpacity>
            </View>
            
            {/* -----------------------Address bar--------------------------- */}
            <View style={{flex:4}}>
                <Text style={styles.headerText}>Deliver To                 
                    {/* <Image source={require('../assets/images/seemore.png')} style={styles.deliverTo}/> */}
                    {'\n'}
                    <Text style={styles.headerText2}>Sector26, Chandigarh</Text>
                </Text>
            </View>
            
            {/* -----------------------Language File For ActionSheet--------------------------- */}       
            <Language/>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={ShowActionSheet}>
                    <Image source={ImagePath.language}/>
                </TouchableOpacity>
            </View>
            
        </View> 
    );
};
export default ProjectHeader;
