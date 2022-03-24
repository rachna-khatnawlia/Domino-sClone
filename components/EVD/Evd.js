import React from 'react';

// importing externnal file
import styles from "../../styles";
// import MenuHeader from './MenuHeader';
// import MenuBestSeller from './MenuBestSeller';

// importing FlatList Data
// import BestsellerPizza from './components/FlatListData/BestsellerPizza';

import {
    SafeAreaView,
    StatusBar,
    Text,
    View, Image, FlatList, Switch, ImageBackground, Pressable
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { ScrollView } from 'react-native-gesture-handler';

const EVD_data = [
    {
        id: '1',
        cancelprice: 'Rs 179',
        price: 'Rs 99',
        veg:'true',
        url: require('../Images/Evd/img1.jpeg'),
        title: 'Achari Do Pyaza',
        Description: 'Tangy & spicy achari flavours on a super cheesy onion pizza-as desi as it gets!',
    },
    {
        id: '2',
        cancelprice: 'Rs 179',
        price: 'Rs 99',
        veg:'false',
        url: require('../Images/Evd/img2.jpeg'),
        title: 'Cheese n Tomato',
        Description: 'Tangy & spicy achari flavours on a super cheesy onion pizza-as desi as it gets!',
    },
    {
        id: '3',
        cancelprice: 'Rs 179',
        price: 'Rs 99',
        veg:'true',
        url: require('../Images/Evd/img3.jpeg'),
        title: 'Maroccan Spice Pasta Pizza-Veg',
        Description: 'Tangy & spicy achari flavours on a super cheesy onion pizza-as desi as it gets!',
    },
    {
        id: '4',
        cancelprice: 'Rs 179',
        price: 'Rs 99',
        url: require('../Images/Evd/img4.jpeg'),
        title: 'Cheese n Corn',
        Description: 'Tangy & spicy achari flavours on a super cheesy onion pizza-as desi as it gets!',
    },
    {
        id: '5',
        cancelprice: 'Rs 179',
        price: 'Rs 139',
        url: require('../Images/Evd/img5.jpeg'),
        title: 'Fresh Veggie',
        Description: 'Tangy & spicy achari flavours on a super cheesy onion pizza-as desi as it gets!',
    },
];

const Evd = () => {

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={[styles.expMenu]}>
                <View style={styles.Headsection1}>
                    <View style={styles.Headsection1a}>
                        <Image
                            source={require('../Images/HeaderImages/backwardArrow.png')}
                            style={styles.Headsection1Img}
                        />
                    </View>
                    <View style={styles.Headsection1b}>
                        <Text style={styles.Headsection1btxt}>Everyday Value offers</Text>
                    </View>
                </View>

                <View style={[styles.Headsection2, styles.Headsection2evd]}>
                    <Text style={styles.Headsection2evdtxt}>
                        Regular Pizzas{'\n'}Starting @Rs. 99
                    </Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="green"
                        offColor="white"
                        // label=""
                        labelStyle={{ color: "#fff", fontWeight: "800" }}
                        // size="100"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                    <Text style={styles.Headsection2evdtxt}>
                        Medium Pizzas{'\n'}Starting @Rs. 199
                    </Text>
                    {/* <Switch
                            trackColor={{false:'white', true:'white'}}
                            thumbColor={isSwitch}
                        /> */}
                </View>
            </View>
            <View style={styles.Headsection3}>
                <View>
                    <Text>32 items</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image source={require('../Images/Evd/filter.png')} style={styles.Headsection3Img} />
                    <Text>Filter / Sort</Text>
                </View>
            </View>
            <ScrollView>
                <View style={[styles.container]}>
                    <FlatList
                        // horizontal = {true}
                        style={{ paddingBottom: 10 }}
                        data={EVD_data}
                        renderItem={(main) => {
                            // const isVeg={}
                            return (
                                <View style={[styles.bestSellerCard,{opacity:1}]}>
                                    <ImageBackground
                                        source={main.item.url}
                                        style={styles.bestSellerCardImgedv}
                                    >
                                    {
                                        main.item.veg?(
                                            <Image
                                                source={require('../Images/Evd/veg.png')}
                                                style={{ height: 12, width: 12, left:10, top:7 }}
                                            />
                                        ):(
                                            <Image
                                                source={require('../Images/Evd/nonVeg.png')}
                                                style={{ height: 12, width: 12, left:10, top:7 }}
                                            />
                                        )
                                    }
                                            

                                        <Text style={{position:'absolute',top:10,left:10}}></Text>

                                        <View style={styles.section1edv}>
                                            <Text style={styles.section1aedv}>SAVE{'\n'}Rs.80</Text>
                                        </View>

                                        <Text style={styles.section2edv}>{main.item.cancelprice}</Text>

                                        <Text style={styles.bestSellerCardPrice}>{main.item.price}</Text>

                                        <Pressable style={styles.section3edv}>
                                            <Text style={{fontSize:12}}>CUSTOMIZE</Text>
                                            <Image
                                                source={require('../Images/Evd/forwardArrow.png')}
                                                style={{ height: 15, width: 15, marginLeft:5 }}
                                            />
                                        </Pressable>

                                    </ImageBackground>
                                    <View style={{ padding: 10 }}>

                                        <Text style={styles.bestSellerCardtitle}>{main.item.title}</Text>
                                        
                                        <View style={{ paddingVertical: 5, display: 'flex', flexDirection: "row" }}>
                                            <Text>{main.item.Description}</Text>
                                        </View>
                                        
                                        <View style={styles.section4edv}>
                                            <View>
                                                <Text style={{color:'grey',fontSize:13,paddingBottom:3, fontWeight:'500'}}>Size</Text>
                                                <Text style={{fontWeight:'400'}}>Medium</Text>
                                            </View>
                                            <View>
                                                <Text style={{color:'grey',fontSize:13,paddingBottom:3, fontWeight:'500'}}>Crust</Text>
                                                <View style={{display:'flex',flexDirection:'row'}}>
                                                    <Text style={{fontWeight:'400'}}>New Hand Tossed</Text>
                                                    <Image
                                                        source={require('../Images/Evd/downwardArrow.png')}
                                                        style={{ height: 15, width: 15, alignSelf:'center', marginLeft:5 }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{alignSelf:'center'}}>
                                                <Pressable style={{backgroundColor:'green', opacity:0.9, paddingVertical:5, paddingHorizontal:20,borderRadius:3}}>
                                                    <Text style={{fontSize:12, color:'#FFF',fontWeight:'600'}}>SELECT</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                        
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>



        </SafeAreaView>
    );
};

export default Evd;