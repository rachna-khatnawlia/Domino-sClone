import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
// alert(width)
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf3ff",
    paddingBottom: 100,
    paddingTop: 7,
  },
  headerBox: {
    width: '100%',
    height: 55,
    paddingHorizontal: 15,
    backgroundColor: '#2b63a0',
    top: 0,
    left: 0,
    alignItems: 'center',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerImage: {
    height: 18,
    width: 35,
  },
  headerText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  headerText2: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    paddingBottom: 50
  },

  deliverTo: {
    height: 10,
    width: 10
  },
  deliver: {
    flex: 1,
    flexDirection: 'row',
    // position:'absolute'
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  deliverbox1: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    paddingStart: 5,
    paddingTop: 2,
    borderRadius: 5,
  },
  deliverRadios: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 7,
  },
  deliverbox2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    // width:30,
  },
  deliverbox2Img: {
    height: 22,
    width: 22,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  deliverbox2Txt: {
    fontSize: 11,
    lineHeight: 12,
    paddingLeft: 0
  },


  offers1: {
    height: 120,
    width: 280,
    margin: 5,
    resizeMode: "cover",
    borderRadius: 5
  },


  exploreheading: {
    paddingTop: 20,
    paddingBottom: 7,
    paddingHorizontal: 20,
    fontSize: 15,
    color: 'black',
    fontWeight: '600'
  },

  explorepic: {
    height: width / 5.8,
    width: width / 6,
    // alignItems: 'center',
    marginHorizontal: width / 12.5,
    marginVertical: 10,
    borderRadius: (width / 5.8) / 2,

  },
  exploretxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 10
  },

  choosePizza: {
    height: 100,
    margin: 5,
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 5,
    width: width - 10,
    resizeMode: 'contain',
  },

  easyOrderBlock: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    padding: 15,
  },
  easyOrderHeading: {
    padding: 10,
    paddingLeft: 0,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  orderNo: {
    paddingVertical: 9,
    textAlign: 'center',
    backgroundColor: '#e1e6e2',
    width: width / 4.4,
    overflow: 'hidden',
    borderRadius: 5,
    fontSize: 11,
    marginTop: 10,
  },
  text1: {
    paddingVertical: 11,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 13,
    fontWeight: '300',
    color: 'black'
  },
  reorder: {
    // paddingHorizontal:20,
    paddingVertical: 9,
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    width: width / 4.5,
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 3
  },
  reorderTouchable:{
    position: 'absolute',
    right: 0,
    top: 12,

  },
  textUnderReorder: {
    position: 'absolute',
    right: 0,
    top: 60,
    fontWeight: '300',
    fontSize: 12,
  },
  offers: {
    height: 150,
    margin: 5,
    resizeMode: "contain",
    borderRadius: 5
  },
  bestsellersDiv: {
    margin: 5,
    overflow: 'hidden',
    borderRadius: 5,
    position: 'relative',
  },
  shadowprop: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bestsellersImg: {
    width: 150,
    height: 180,
    resizeMode: 'contain',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    opacity: 0.9
  },
  bestsellersImgText1: {
    position: 'absolute',
    opacity: 1,
    bottom: 50
  },
  bestsellersImgText: {
    color: 'white',
    fontWeight: '800',
    lineHeight: 20,
    position: 'absolute',
  },
  bestsellersButton: {
    color: 'green',
    paddingVertical: 10,
    // width:150,
    textAlign: 'center',
    backgroundColor: 'white',
    zIndex: 100,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5
  },
  bottomView: {
    width: '100%',
    height: 90,
    position: 'absolute',
    bottom: -10,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderWidth: 0.4,
    borderTopColor: 'grey',
    paddingTop: 10,
    borderBottomWidth: 27,
    borderColor: '#2b63a0'
  },
  footerbox: {
    flex: 1,
    alignItems: 'center'
  },
  footerImg: {
    height: 25,
    width: 25,
    marginBottom: 5,
  },
  footertext: {
    fontSize: 12,
  },

  //---------------------------->



  //----------------------------> MenuHeader
  expMenu: {
    backgroundColor: '#2b63a0',
    width: '100%',
    padding: 7,
    paddingBottom: 2,
    // color:'white'
  },
  Headsection1: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    // justifyContent:'center',
    // alignItems:'center',
    // color:'red'
    paddingTop: 5,
    paddingBottom: 10
  },
  Headsection1a: {
    flex: 0.1,
    justifyContent: 'center'
  },
  Headsection1Img: {
    height: 22,
    width: 25,
    resizeMode: 'contain',
    paddingHorizontal: 5
  },
  Headsection1b: {
    flex: 0.6,
    alignSelf: 'center',
    // alignItems:'center'
    // justifyContent: 'center'
  },
  Headsection1btxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Headsection1c: {
    flex: 0.31,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 27, marginRight: 15,
    borderRadius: 4
  },
  Headsection1ctxt: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500'
  },
  Headsection1d: {
    flex: 0.1,
    justifyContent: 'center'

  },
  Headsection2: {
    paddingTop: 10
  },
  HeadSection2txt: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 6.5,
  },

  //Menu->Bestseller-css
  bestSellerCard: {
    margin: 7,
    backgroundColor: "#fff",
    // borderWidth:1
    borderRadius: 5,
    overflow: 'hidden',
    // height:220,

  },
  bestSellerCardImg: {
    position: 'relative',
    height: 140,
    width: '100%',
    // backgroundColor:'red',
    resizeMode: 'stretch',
    opacity: 0.9
  },
  RecommendLike: {
    display: 'flex',
    height: 35,
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 20
  },
  RecBtn: {
    borderColor: 'white',
    borderWidth: 1.5,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 50
  },
  RecBtntxt: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold'
  },
  bestSellerCardPrice: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 19,
    fontWeight: '500',
    color: 'white',
  },
  bestSellerCardtitle: {
    width: '65%',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // EVD
  Headsection2evd: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 10,
    justifyContent: 'center'
  },
  Headsection2evdtxt: {
    paddingHorizontal: 15,
    fontWeight: '500',
    color: 'white'
  },
  Headsection3: {
    backgroundColor: '#e3f1ff',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    // paddingVertical:7,
    paddingHorizontal: 20,
    height: 35,
    alignItems: 'center'
  },
  Headsection3Img: {
    height: 20,
    width: 20,
    marginHorizontal: 7
  },
  bestSellerCardImgedv: {
    position: 'relative',
    height: 125,
    // width: '100%',
    // backgroundColor:'red',
    resizeMode: 'stretch',
    opacity: 0.9
  },
  section1edv: {
    position: 'absolute',
    top: 2,
    right: 10,
    backgroundColor: 'maroon',
    paddingBottom: 5
  },
  section1aedv: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    padding: 3
  },
  section2edv: {
    position: 'absolute',
    bottom: 35,
    fontSize: 14,
    left: 10,
    color: 'white',
    textDecorationLine: 'line-through',
    fontWeight: 'bold'
  },
  section3edv: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    opacity: 0.9,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  section4edv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5
  },

  // cart
  cartBody: {
    // flex:1,
    display: 'flex',
    height: '100%',
    // position:'relative',
    backgroundColor: "#e3f1ff",
    justifyContent: 'center',
    alignItems: 'center',
  },




  // ------------------------>Login / Signup
  LoginBody: {
    backgroundColor: "#f2f2f4",
    display: 'flex',
    height: '100%',
  },
  loginBg: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
  },
  loginBgImg: {
    resizeMode: 'stretch',
    width: '100%',
    height: 115
  },
  blockUnderLoginImg: {
    paddingHorizontal: 35,
  },
  blockUnderLoginImg1: {
    fontSize: 25,
    fontWeight: '200',
    letterSpacing: 1.5,
    paddingBottom: 3
  },
  blockUnderLoginImg2: {
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.3,
    paddingBottom: 10
  },
  input: {
    height: 40,
    marginVertical: 8,
    // marginHorizontal: 20,
    borderWidth: 0,
    borderBottomWidth: 0.3,
    paddingHorizontal: 10,
    borderRadius: 2
  },
  logSignBtn: {
    backgroundColor: 'green',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 15,
    overflow: 'hidden'
  },
  logBtntxt: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forget: {
    textAlign: 'center',
    paddingTop: 10,
    // paddingBottom: 10,
    color: '#2b63a0',
    fontWeight: '600'
  },
  signupBgImg: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200
  },
  signupBody: {
    backgroundColor: "#edf3ff",
    display: 'flex',
    height: '100%',
  },

  //------------------->DeliveronTrain------------------------
  dotBg: {
    margin: 8,
    borderRadius: 3,
    overflow: 'hidden'
  },
  dotBgImg: {
    width: '100%',
    resizeMode: 'stretch',
    height: 100
  },
  whitedotbg: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 8
  },
  txtAfterInputPNR: {
    color: 'green',
    fontWeight: '300',
    letterSpacing: 0.5,
    paddingHorizontal: 5
  },
  dotCheckBox: {
    alignSelf: "center",
    height: 15,
    width: 15,
    marginRight: 7
  },
  dotChecktxt: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500'
  },
  dotHisTxt1: {
    flex: 0.1
  },
  dotHisTxt2: {
    flex: 0.8,
    alignSelf: 'center'
  },
  dotHisTxt3: {
    flex: 0.1,
    alignSelf: 'center',
    alignItems: 'flex-end'
  },
  flexRow: {
    display: 'flex', flexDirection: 'row',
  },
  ulText1: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 5
  },
  ul2: {
    // fontWeight:'bold',
    fontSize: 20,
    fontWeight: 'bold'
  },
  ul2txt: {
    // color:'grey',
    fontWeight: "300",
    padding: 5,
  },
  ulText2: {
    fontWeight: 'bold',
    color: '',
    fontSize: 15,
    paddingBottom: 5
  },
  ulText3: {
    color: '#2b63a0',
    paddingTop: 10,
    fontWeight: '500'
  }

});

export default styles;
// #edf3ff