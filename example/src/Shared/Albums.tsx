/* eslint-disable import/no-commonjs */

import { useScrollToTop } from '@react-navigation/native';
import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScaledSize,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
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
  require('../../assets/unnamed.gif'),
  require('../../assets/ape2.jpg'),
  // require('../../assets/game.jpg'),
];
export default function Albums(props: Partial<ScrollViewProps>) {
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));

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
            <TouchableOpacity onPress={() => console.log('motherfucker')}>
              <Image source={source} style={{ width: 220 }} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Image
        source={require('../../assets/unnamed.jpg')}
        style={{
          position: 'absolute',
          right: 0,
          width: 192,
          height: 220,
          top: 300,
        }}
      />

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
              <TouchableOpacity onPress={() => console.log('motherfucker')}>
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
              <TouchableOpacity onPress={() => console.log('motherfucker')}>
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
  img: {},
});

