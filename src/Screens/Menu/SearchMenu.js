import React from 'react';

//importing externnal file
import MenuHeader from '../../Components/MenuHeader';
import MenuBestSeller from '../../Components/MenuBestSeller';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

const SearchMenu = ({navigation}) => {
  
  return (
    <SafeAreaView>
      <StatusBar navigation={navigation}/>
      
      {/* Explore menu header */}
      {/* <MenuHeader/> */}

      {/* Bestseller data */}
      <MenuBestSeller/>
      
    </SafeAreaView>
  );
};

export default SearchMenu;