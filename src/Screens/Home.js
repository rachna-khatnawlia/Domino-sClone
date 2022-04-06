import React from 'react';
// importing style
import styles from '../styles/styles';
import { logout } from '../redux/actions/auth';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//components import
import ProjectHeader from '../Components/ProjectHeader';
import Deliver from '../Components/Deliver';
import ChoosePizza from '../Components/ChoosePizza';
import EasyOrder from '../Components/EasyOrder';

// flatlist data import
import Offers1 from '../assets/FlatListData/offers1';
import Offers from '../assets/FlatListData/Offers.js';
import Explore from '../assets/FlatListData/Explore.js';
import Best_Sellers from '../assets/FlatListData/Bestsellers.js';

import {
    View,
    Text,
    FlatList, Image, SafeAreaView, ScrollView, ImageBackground, Pressable, Button, TouchableOpacity
} from 'react-native';


const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    return (

        <SafeAreaView>
            {/* Header */}
            <ProjectHeader navigation={navigation} />

            <ScrollView style={{ display: 'flex' }}>

                <View style={styles.container}>

                    {/* Deliver  */}
                    <Deliver navigation={navigation} />

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
                    <ChoosePizza navigation={navigation} />

                    {/* Easy Order   */}
                    <EasyOrder />

                    {/* offers */}
                    <View style={{ position: 'relative' }}>
                        <Text style={styles.exploreheading}>Offers</Text>
                        <Text style={{ position: 'absolute', bottom: 8, right: 5, color: '#2b63a0', fontSize: 12 }}>VIEW ALL</Text>
                    </View>

                    <FlatList horizontal
                        data={Offers}
                        renderItem={(main) => {
                            return (
                                <TouchableOpacity>
                                    <Image source={main.item.title} style={styles.offers} />
                                </TouchableOpacity>
                            )
                        }}
                    />

                    {/* Best Sellers */}
                    <Text style={styles.exploreheading}>Bestsellers</Text>
                    <View>
                        <FlatList horizontal={true}
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
                    <Button title='Logout' onPress={() => dispatch(logout())} />
                </View>
            </ScrollView>

        </SafeAreaView>



    );
};

export default Home;
