import React from 'react';

//importing externnal file
import styles from "../../styles";

import {
  SafeAreaView,
  StatusBar,
  Text, ScrollView, View, Image, TouchableOpacity
} from 'react-native';

const Cart = ({navigation}) => {
    return (
        <SafeAreaView>
        <StatusBar />


        {/* ---------->Cart header------------------ */}
        <View style={styles.expMenu}>
            <View style={styles.Headsection1}>
                <View style={styles.Headsection1a}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                        <Image 
                            source={require('../Images/HeaderImages/backwardArrow.png')}
                            style={styles.Headsection1Img}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.Headsection1b}>
                    <Text style={{fontSize:14, color:'#fff', fontWeight:'500'}}>Empty Cart</Text>
                </View>
            </View>
        </View>
    

        {/* ---------->Cart Body------------------ */}
        <View style={[styles.cartBody]}>
            <View style={{}}>
                <Image 
                    source={require('../Images/cart/cartImg.jpeg')}
                    style={{borderRadius:75, height:150, width:150, alignSelf:'center', marginBottom:25}}
                    />
                <Text style={{textAlign:'center', fontSize:18, fontWeight:"100"}}>YOUR CART IS EXMPTY</Text>
                <Text style={{textAlign:'center', fontSize:14,paddingVertical:5,  fontWeight:"300"}}>Please add some items from the menu</Text>
             
                <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}}>
                    <View style={{backgroundColor:'#479e48',borderRadius:4, alignSelf:'center', marginTop:15}}>
                        <Text style={{paddingVertical:8, paddingHorizontal:15, color:'white',fontWeight:'bold'}}>EXPLORE MENU</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
  );
};

export default Cart;