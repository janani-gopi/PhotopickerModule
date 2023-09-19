import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 20,
    },
    iconcontainer: {
      backgroundColor: '#ffc30b',
      padding: 20,
      borderRadius: 50,
      marginBottom: 30,
    },
    text: {
      color: 'black',
      fontSize: 18,
      marginBottom: 20,
      marginLeft: 15,
    },
    text1: {
      marginLeft: -150,
      color: 'black',
      fontSize: 15,
      marginTop: 20,
    },
    smalltext: {
      color: 'gray',
      fontSize: 15,
      textAlign: 'center',
    },
    headercontainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: 25,
      marginLeft: 10,
    },
    flexcontainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 10,
    },
    buttoncontainer: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 20,
      position: 'absolute',
      bottom: 15,
    },
    horizontaline: {
      borderBottomColor: 'skyblue',
      borderBottomWidth: 2,
    },
    header: {
      fontSize: 20,
      color: 'black',
      marginLeft: 10,
      marginTop: -5,
    },
    button: {
      width: 150,
      padding: 10,
      backgroundColor: '#ffc30b',
      borderRadius: 15,
    },
    buttontext: {
      textAlign: 'center',
      fontSize: 15,
      color: 'white',
    },
    buttonoutline: {
      width: 150,
      padding: 10,
      borderWidth: 2,
      borderColor: '#ffc30b',
      borderRadius: 15,
    },
    buttonoutlinetext: {
      textAlign: 'center',
      fontSize: 15,
      color: '#ffc30b',
    },
    imagecontainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      columnGap: 5,
      paddingTop: 10,
      flexWrap: 'wrap',
      rowGap: 5,
    },
    image: {
      height: 110,
      width: 110,
      borderRadius: 15,
      backgroundColor: 'white',
      elevation: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      position: 'absolute',
      top: -99,
      left: 33,
    },
    imagecaption:{
        fontSize:12,
        marginTop:5,
        color:"black"
    }
  });
  