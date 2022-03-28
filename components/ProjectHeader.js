import React from 'react';
import styles from '../styles.js';

import { View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import NavigationUsingDrawer from './NavigationUsingDrawer.js';
import { useNavigation } from '@react-navigation/native';

const ProjectHeader = ({navigation}) => {
    

    return (
        <View style={styles.headerBox}>
            
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer('Drawer')}>
                        <Image source={require('./Images/listHeader.png')} style={styles.headerImage} />
                </TouchableOpacity>
            </View>
            
            <View style={{flex:4}}>
                <Text style={styles.headerText}>Deliver To                 
                    {/* <Image source={require('./Images/seemore.png')} style={styles.deliverTo}/> */}
                    {'\n'}<Text style={{textDecorationLine:'underline', textDecorationStyle:'dotted',paddingBottom:50}}>Sector26, Chandigarh</Text>
                </Text>
            </View>
            
            <View style={{flex:2, flexDirection:'row'}}>
                {/* <Image source={require('./Images/pizzaPalHeader.jpeg')} style={{height:40,width:70}} /> */}
                {/* <Text style={styles.headerText}>Pizza{'\n'}Pals</Text> */}
            </View>
            
            <View style={{flex:1}}>
                <TouchableOpacity>
                    <Image source={require('./Images/languageHeader.jpeg')}/>
                </TouchableOpacity>
            </View>
            
        </View> 
    );
};
export default ProjectHeader;
