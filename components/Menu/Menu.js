import React from 'react';

//importing externnal file
import MenuHeader from './MenuHeader';
import MenuBestSeller from './MenuBestSeller';

import {
  SafeAreaView,
  StatusBar,
  Text,
 
} from 'react-native';

const Menu = ({navigation}) => {
  
  return (
    <SafeAreaView>
      <StatusBar navigation={navigation}/>
      
      {/* Explore menu header */}
      <MenuHeader/>

      {/* Bestseller data */}
      <MenuBestSeller/>
      
    </SafeAreaView>
  );
};

export default Menu;