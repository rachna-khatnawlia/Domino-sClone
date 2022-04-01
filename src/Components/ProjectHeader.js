import React from 'react';
import styles from '../styles/styles';

import { View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';

import ActionSheet, { SheetManager } from "react-native-actions-sheet";

import Language from './Language';


const ProjectHeader = ({navigation}) => {
    function ShowActionSheet(){
        SheetManager.show("language");
    }
    return (
        <View style={styles.headerBox}>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer('Drawer')}>
                    <Image source={require('../assets/images/listHeader.png')} style={styles.headerImage} />
                </TouchableOpacity>
            </View>
            
            <View style={{flex:4}}>
                <Text style={styles.headerText}>Deliver To                 
                    {/* <Image source={require('../assets/images/seemore.png')} style={styles.deliverTo}/> */}
                    {'\n'}<Text style={{textDecorationLine:'underline', textDecorationStyle:'dotted',paddingBottom:50}}>Sector26, Chandigarh</Text>
                </Text>
            </View>
            
            <View style={{flex:2, flexDirection:'row'}}>
                {/* <Image source={require('../assets/images/pizzaPalHeader.jpeg')} style={{height:40,width:70}} /> */}
            </View>
            
            <Language/>

            <View style={{flex:1}}>
                <TouchableOpacity onPress={ShowActionSheet}>
                    <Image source={require('../assets/images/languageHeader.jpeg')}/>
                </TouchableOpacity>
            </View>
            
            {/* <ActionSheet id="language" style>
                <Text>Hello ActionSheet</Text>
            </ActionSheet> */}
        </View> 
    );
};
export default ProjectHeader;
