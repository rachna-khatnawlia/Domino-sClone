import React from 'react';

//importing externnal file
// import styles from "../../styles";
import MenuHeader from './MenuHeader';
import MenuBestSeller from './MenuBestSeller';

// importing FlatList Data
// import BestsellerPizza from './components/FlatListData/BestsellerPizza';

import {
  SafeAreaView,
  StatusBar,
  Text,
 
} from 'react-native';

const Menu = () => {
  
  return (
    <SafeAreaView>
      <StatusBar />
      
      {/* Explore menu header */}
      <MenuHeader/>

        {/* Bestseller data */}
        <MenuBestSeller/>
      
    </SafeAreaView>
  );
};

export default Menu;