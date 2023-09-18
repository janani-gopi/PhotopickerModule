import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'react-native-gesture-bottom-sheet';
const App = () => {
  const bottomSheet = useRef();

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
        <View
          style={[
            styles.flexcontainer,
            {borderBottomWidth: 1, borderBottomColor: '#e5e5e5'},
          ]}>
          <Feather name="camera" size={25} color={'black'} />
          <Text style={styles.text}>Camera</Text>
        </View>
        <View
          style={[
            styles.flexcontainer,
            {borderBottomWidth: 1, borderBottomColor: '#e5e5e5'},
          ]}>
          <Ionicons name="document-text-outline" size={25} color={'black'} />
          <Text style={styles.text}>Documents</Text>
        </View>
        <View
          style={[
            styles.flexcontainer,
            {borderBottomWidth: 1, borderBottomColor: '#e5e5e5'},
          ]}>
          <Ionicons name="images-outline" size={25} color={'black'} />
          <Text style={styles.text}>Gallery</Text>
        </View>
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
  smalltext: {
    color: 'gray',
    fontSize: 15,
    textAlign: 'center',
  },
  headercontainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical:25,
    marginLeft:10
  },
  flexcontainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft:10
  },
  horizontaline: {
    borderBottomColor: 'skyblue',
    borderBottomWidth: 2,
  },
  header: {
    fontSize: 20,
    color: 'black',
    marginLeft:10,
    marginTop:-5
  },
});
