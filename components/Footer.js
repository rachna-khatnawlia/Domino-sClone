import React from 'react';

import styles from '../styles';

import Home from './Home';
import Menu from './Menu/Menu';
import Evd from './EVD/Evd';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

const Footer = () => {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name ="Home" component={Home} options={{
                        headerShown:false, tabBarIcon:({focused})=>(
                            <Image 
                                source={require('./Images/home.png')} 
                                style={styles.footerImg}
                            />
                        )
                    }} 
                />
                <Tab.Screen name ="Menu" component={Menu} options={{
                        headerShown:false, tabBarIcon:({focused})=>(
                            <Image 
                                source={require('./Images/menu.png')} 
                                style={styles.footerImg}
                            />
                        )
                    }} 
                />
                <Tab.Screen name ="EVD" component={Evd} options={{
                        headerShown:false, tabBarIcon:({focused})=>(
                            <Image 
                                source={require('./Images/tag.png')} 
                                style={styles.footerImg}
                            />
                        )
                    }} 
                />
                {/* 
                <Tab.Screen name ="Home" component={Home} options={{
                    headerShown:false
                }} />
                <Tab.Screen name ="Home" component={Home} options={{
                    headerShown:false
                }} /> */}
            </Tab.Navigator>
        </NavigationContainer>
        
    );
};
export default Footer;
