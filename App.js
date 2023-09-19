import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const bottomSheet = useRef();
  const [image, setImage] = useState([]);

  //to open camera and upload image
  function usingCamera() {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
    }).then(image => {
      setImage(prev => [...prev, image]);
    });
  }
  // open gallery and to upload image
  function fromGallery() {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
    }).then(image => {
      setImage(prev => [...prev, image]);
    });
  }
  //to delete a single image
  function deleteSingleImage(index) {
    Alert.alert('Delete', 'You surely want to delete this image?', [
      {
        text: 'Cancel',
        onPress: () => {
          null
        },
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const images = image.filter((each, index1) => {
            if (index1 != index) {
              return each;
            }
          });
          setImage(images);
        },
      },
    ]);
  }
  console.log("image array : ",image);
  return (
    <View style={styles.container}>
      <BottomSheet ref={bottomSheet} height={350}>
        <View style={styles.headercontainer}>
          <TouchableOpacity
            onPress={() => {
              bottomSheet.current.close();
            }}>
            <FontAwesome name="close" size={20} color={'gray'} />
          </TouchableOpacity>
          <Text style={styles.header}>Upload</Text>
        </View>
        <View style={styles.horizontaline}></View>
        <TouchableOpacity
          onPress={usingCamera}
          style={[
            styles.flexcontainer,
            {borderBottomWidth: 1, borderBottomColor: '#e5e5e5'},
          ]}>
          <Feather name="camera" size={25} color={'black'} />
          <Text style={styles.text}>Camera</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.flexcontainer,
            {borderBottomWidth: 1, borderBottomColor: '#e5e5e5'},
          ]}>
          <Ionicons name="document-text-outline" size={25} color={'black'} />
          <Text style={styles.text}>Documents</Text>
        </View>
        <TouchableOpacity
          onPress={fromGallery}
          style={[
            styles.flexcontainer,
            {borderBottomWidth: 1, borderBottomColor: '#e5e5e5'},
          ]}>
          <Ionicons name="images-outline" size={25} color={'black'} />
          <Text style={styles.text}>Gallery</Text>
        </TouchableOpacity>
      </BottomSheet>
      <TouchableOpacity
        style={styles.iconcontainer}
        onPress={() => bottomSheet.current.show()}>
        <Entypo name="attachment" size={25} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.text}>File size must not exceed 10MB</Text>
      <Text style={styles.smalltext}>
        Users are reminded that information submitted shall be in accordance to
        their obligations prescribed in the terms of Use governed under the
        Personal Data Protection Act
      </Text>
      <Text style={styles.text1}>Uploaded images</Text>
      <View style={styles.imagecontainer}>
        {image.length > 0 &&
          image.map((each, index) => {
            return (
              <View key={index} style={styles.image}>
                <Image
                  source={{uri: each.path}}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 15,
                  }}
                  key={index}
                />
                <TouchableOpacity onPress={()=>{deleteSingleImage(index)}}>
                  <FontAwesome name="close" size={20} color={'#ffc30b'} style={styles.icon} />
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.buttonoutline}>
          <Text style={styles.buttonoutlinetext}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
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
  },
  image:{
    height:110,
    width:110,
    elevation:5,
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  icon:{
    position:"absolute",
    top:-95,
    left:33
  }
});
