import { useScrollToTop, useTheme } from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import { Button } from 'react-native-paper';

type Props = Partial<ScrollViewProps> & {
  date?: string;
  author?: {
    name: string;
  };
};

// const Heading = ({
//   style,
//   ...rest
// }: TextProps & { children: React.ReactNode }) => {
//   const { colors } = useTheme();

//   return (
//     <Text style={[styles.heading, { color: colors.text }, style]} {...rest} />
//   );
// };

// const Paragraph = ({
//   style,
//   ...rest
// }: TextProps & { children: React.ReactNode }) => {
//   const { colors } = useTheme();

//   return (
//     <Text style={[styles.paragraph, { color: colors.text }, style]} {...rest} />
//   );
// };

export default function Article({
  date = '1st Jan 2025',
  author = {
    name: 'Knowledge Bot',
  },
  ...rest
}: Props) {
  const ref = React.useRef<ScrollView>(null);
  const [region, setRegion] = React.useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  useScrollToTop(ref);

  // const { colors } = useTheme();

  return (
    // <View>

    <ScrollView
      ref={ref}
      // style={{ backgroundColor: colors.card }}
      contentContainerStyle={styles.content}
      {...rest}
    >
      <Button
        mode="contained"
        style={{ zIndex: 99, bottom: 400, left: 370, width: 5 }}
        onPress={() => console.log('motherfucker')}
        icon="run"
        color="green"
      />
      <View style={{ zIndex: 99, bottom: 40, left: 10 }}>
        <Text style={{ color: 'blue' }}>Token generated : 120</Text>
        <Text>Avg Pace : 8.21</Text>
        <Text>TIme : 23.29</Text>
        <Text>Calories : 442</Text>
        <Text>Elevation Gain : 56 ft</Text>
        <Text>Candence : 159</Text>
        <Text>Avg Heart Rate : 167</Text>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={region}
          onRegionChangeComplete={(region) => setRegion(region)}
        />
        {/* <Text style={styles.text}>Current latitude: {region.latitude}</Text>
    <Text style={styles.text}>Current longitude: {region.longitude}</Text> */}
      </View>
    </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: '100%',
    // flex:1,
  },
  author: {
    flexDirection: 'row',
    zIndex: 99,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {},
});
