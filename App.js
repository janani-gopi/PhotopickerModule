import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {styles} from "./Styles"
import React, {useRef, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import PhotoEditor from 'react-native-photo-editor';
import ImageView from 'react-native-image-viewing';

const App = () => {
  const bottomSheet = useRef();

  //state initialization
  const [image, setImage] = useState([]);
  const [isImageviewerVisible, setImageViewer] = useState(false);
  const [index, setIndex] = useState(0);

  //editing function
  const editing = image => {
    console.log('image:', image);
    PhotoEditor.Edit({
      path: image.path.slice(7),
      stickers: [
        'sticker0',
        'sticker1',
        'sticker2',
        'sticker3',
        'sticker4',
        'sticker5',
        'sticker6',
        'sticker7',
        'sticker8',
        'sticker9',
        'sticker10',
      ],
      colors: undefined,
      onDone: () => {
        console.log('image after : ', image);
        setImage(prev => [...prev, image]);
      },
      onCancel: () => {
        setImage(prev => [...prev, image]);
      },
    });
  };

  //to open camera and upload image
  function usingCamera() {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      // cropping: true,
    }).then(image => {
      editing(image);
    });
  }
  // open gallery and to upload image
  function fromGallery() {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      // cropping: true,
    }).then(image => {
      editing(image);
    });
  }
  //to delete a single image
  function deleteSingleImage(index) {
    Alert.alert('Delete', 'You surely want to delete this image?', [
      {
        text: 'Cancel',
        onPress: () => {
          null;
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
 
  //Array to view the images
  const imagesarray = image?.map(each => {
    return {
      uri: each.path,
    };
  });

  return (
    <View style={styles.container}>
      {/* IMAGE VIEWER */}
      <ImageView
        images={imagesarray}
        imageIndex={index}
        visible={isImageviewerVisible}
        onRequestClose={() => setImageViewer(false)}
      />
      {/* IMAGE VIEWER */}
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
      {/* IMAGE CONTAINER */}
      <View style={styles.imagecontainer}>
        {image.length > 0 &&
          image.map((each, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.image}
                onPress={() => {
                  setIndex(index);
                  setImageViewer(true);
                }}>
                <Image
                  source={{uri: each.path}}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 10,
                  }}
                  key={index}
                />
                <Text style={styles.imagecaption}>img.jpg{Math.round(Math.random()*2000 + 1)}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteSingleImage(index);
                  }}>
                  <Ionicons
                    name="close"
                    size={25}
                    color={'#ffc30b'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
      </View>
       {/* IMAGE CONTAINER */}
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

