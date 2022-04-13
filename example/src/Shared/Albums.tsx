/* eslint-disable import/no-commonjs */

import { useScrollToTop } from '@react-navigation/native';
import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  ScaledSize,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const gif1 = [
  require('../../assets/Shoe5.gif'),
  require('../../assets/Shoe1.gif'),
  // require('../../assets/Shoe3.gif'),
  // require('../../assets/Shoe4.gif'),
  // require('../../assets/ape1.jpg'),
  // require('../../assets/ape2.jpg'),
  // require('../../assets/album-art-13.jpg'),
];

const gif2 = [
  require('../../assets/Shoe3.gif'),
  require('../../assets/Shoe4.gif'),
];

const img1 = [
  require('../../assets/shoe6.gif'),
  require('../../assets/shoe7.gif'),
  // require('../../assets/game.jpg'),
];
export default function Albums(props: Partial<ScrollViewProps>) {
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useEffect(() => {
    const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    Dimensions.addEventListener('change', onDimensionsChange);

    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  const ref = React.useRef<ScrollView>(null);

  useScrollToTop(ref);

  // const itemSize = dimensions.width;

  return (
    <ScrollView ref={ref} contentContainerStyle={styles.content} {...props}>
      <View style={{ flexDirection: 'row' }}>
        {img1.map((source, i) => (
          <View
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          >
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={source} style={styles.gif2} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
{/* 
      <Image
        source={require('../../assets/unnamed.jpg')}
        style={{
          position: 'absolute',
          right: 0,
          width: 192,
          height: 220,
          top: 300,
        }}
      /> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>The 9th Generation Nike anniversary version</Text>
            <Text style={styles.modalText}>Current Price : 300 HKD</Text>
            {/* <Text>Price :</Text> */}
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}

            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => console.log('nice')}
              >
                <Text style={styles.textStyle}>Purchase</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground
        source={require('../../assets/dark.jpg')}
        resizeMode="cover"
        style={{ width: 500 }}
      >
        {/* <Text style={styles.text}>Inside</Text> */}
        {/* </ImageBackground> */}

        <View style={{ flexDirection: 'row' }}>
          {gif1.map((source, i) => (
            <View
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            >
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={source} style={styles.gif} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {gif2.map((source, i) => (
            <View
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            >
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={source} style={styles.gif} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ImageBackground>
      {/* <Image ></Image> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      content: {
        // backgroundColor:'black',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      item: {},
    },
    default: {
      content: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
      },
    },
  }),
  gif: {
    // flex: 1,
    // position:'absolute',
    resizeMode: 'contain',
    // right: 100,
    height: 130,
    width: 200,
  },
  gif2: {
    // flex: 1,
    // position:'absolute',
    resizeMode: 'cover',
    // right: 100,
    height: 130,
    width: 210,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    marginLeft:10,
    // paddingLeft:10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});
