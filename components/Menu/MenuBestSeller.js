import React from "react";
import { Text,View, ScrollView, FlatList, ImageBackground, Pressable, Image} from "react-native";
import styles from "../../styles";

import BestsellerPizza from "../FlatListData/BestsellerPizza"

const MenuBestSeller = () => {
    return(
        <ScrollView style={{display:'flex'}}>

        <View style={styles.container}>
          

          {/* <Text>Hello</Text> */}
          <FlatList 
            // horizontal = {true}
            style={{ paddingBottom: 10 }}
            data={BestsellerPizza}
            renderItem={(main) => {

              const Description_length = main.item.Description.length;
              if(Description_length>0){
                var Des_Or_Menu = main.item.Description;
                var css={
                  fontSize:13,
                  lineHeight:16,
                }
              }else{
                var Des_Or_Menu = main.item.menu;
                var css={
                  fontSize:13,
                  lineHeight:16,
                  // width:'65%',
                  flex:0.7
                }
              }

              return (
                <View style={styles.bestSellerCard}>
                  <ImageBackground 
                    source={main.item.url} 
                    style={styles.bestSellerCardImg}
                  >
                    <View style={styles.RecommendLike}>
                        <Pressable style={styles.RecBtn}>
                          <Text style={styles.RecBtntxt}>Recommended</Text>
                        </Pressable>
                      <Image 
                        source={require('../Images/BestSellers/like.png')}
                        style={{height:30,width:30}}
                      />
                    </View>
                    <Text style={styles.bestSellerCardPrice}>{main.item.price}</Text>
                  </ImageBackground>
                  <View style={{padding:10}}>
                    <Text style={styles.bestSellerCardtitle}>{main.item.title}</Text>
                    <View style={{paddingVertical:5,display:'flex', flexDirection:"row"}}>
                      <Text style={css}>{Des_Or_Menu}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    );
};

export default MenuBestSeller;