import React, { useState } from "react";
import styles from "../styles/styles";

//importing Flatlist
import BestsellerPizza from "../assets/FlatListData/BestsellerPizza";

import { Text, View, ScrollView, FlatList, ImageBackground, Pressable, Image, TouchableOpacity } from "react-native";


const MenuBestSeller = () => {
  const [liked, setLiked] = useState(false)
  const like = () => {
    if (liked) {
      setLiked(false)
    } else {
      setLiked(true)
    }
  }

  return (
    <ScrollView style={{ display: 'flex' }}>

      <View style={styles.container}>

        <FlatList
          // horizontal = {true}
          style={{ paddingBottom: 10 }}
          data={BestsellerPizza}
          renderItem={(main) => {

            const Description_length = main.item.Description.length;
            if (Description_length > 0) {
              var Des_Or_Menu = main.item.Description;
              var css = {
                fontSize: 13,
                lineHeight: 16,
              }
            } else {
              var Des_Or_Menu = main.item.menu;
              var css = {
                fontSize: 13,
                lineHeight: 16,
                // width:'65%',
                flex: 0.7
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

                    <TouchableOpacity onPress={like}>
                      <Image
                        source={liked ? require('../assets/images/BestSellers/redLike.png') : require('../assets/images/BestSellers/like.png')}
                        style={{ height: 30, width: 30 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.bestSellerCardPrice}>{main.item.price}</Text>
                </ImageBackground>

                <View style={{ padding: 10 }}>
                  <Text style={styles.bestSellerCardtitle}>{main.item.title}</Text>
                  <View style={{ paddingVertical: 5, display: 'flex', flexDirection: "row" }}>
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