import React from 'react';

// importing style
import styles from './styles.js';

//components import
import ProjectHeader from './components/ProjectHeader.js';
import Deliver from './components/Deliver.js';
import ChoosePizza from './components/ChoosePizza.js';
import EasyOrder from './components/EasyOrder.js';
import Footer from './components/Footer.js';

// flatlist data import

import Offers1 from './components/FlatListData/offers1.js';
import Offers from './components/FlatListData/Offers.js';
import Explore from './components/FlatListData/Explore.js';
import Best_Sellers from './components/FlatListData/Bestsellers.js';

import {
  View,
  Text,
  StyleSheet,
  FlatList, Image, SafeAreaView, ScrollView, ImageBackground, StatusBar
} from 'react-native';

import { Pressable } from 'react-native';


const App = () => {
  return (
      
      <SafeAreaView>
            {/* Header */}
            <ProjectHeader/>
        

        <ScrollView style={{display:'flex'}}>
            <View style={styles.container}>

                
                {/* Deliver  */}
                <Deliver/>
                {/* offers */}
                <FlatList horizontal
                    data={Offers1}
                    renderItem={(element) => {
                        return (
                            <Image source={element.item.title} style={styles.offers1} />
                        )
                    }}
                />

                {/* Explore Menu */}
                <Text style={styles.exploreheading}>Explore Menu</Text>
                <FlatList 
                //   horizontal = {true}
                    style={{ paddingBottom: 10 }}
                    data={Explore}
                    renderItem={(main) => {
                    return (<View>
                        <Image source={main.item.url} style={styles.explorepic} />
                        <Text style={styles.exploretxt}>{main.item.title}</Text>
                    </View>
                    )
                    }}
                    numColumns={3}
                />


                {/* Choose Pizza */} 
                <ChoosePizza />

                {/* Easy Order   */}
                <EasyOrder/>

                {/* offers */}
                <View style={{position:'relative'}}>
                    <Text style={styles.exploreheading}>Offers</Text>
                    <Text style={{position:'absolute', bottom:8, right:5, color:'#2b63a0', fontSize:12}}>VIEW ALL</Text>
                </View>
                <FlatList horizontal
                    data={Offers}
                    renderItem={(main) => {
                    return (
                        <Image source={main.item.title} style={styles.offers} />
                    )
                    }}
                />

                {/* Best Sellers */}
                <Text style={styles.exploreheading}>Bestsellers</Text>
                <View>
                    <FlatList horizontal = {true}
                    data={Best_Sellers}
                    renderItem={(seller) => {
                        return (<View style={styles.bestsellersDiv}>
                        <ImageBackground source={seller.item.url} style={styles.bestsellersImg}>
                            <View style={styles.bestsellersImgText1}>
                            <Text style={styles.bestsellersImgText}>{seller.item.title}</Text>
                            </View>
                        </ImageBackground>
                        <Pressable>
                            <Text style={styles.bestsellersButton}>ADD</Text>
                        </Pressable>
                        </View>
                        )
                    }}
                    />
                </View>

            </View>
        </ScrollView>

        {/* Footer  */}
        <Footer/>

    </SafeAreaView>

      

  );
};

export default App;
