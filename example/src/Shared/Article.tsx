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
import MapView, { Callout, Marker, UrlTile } from 'react-native-maps';
import { Banner, Button, TextInput } from 'react-native-paper';
// import {useState} from 'React'

type Props = Partial<ScrollViewProps> & {
  date?: string;
  author?: {
    name: string;
  };
};

// and it goes on and on

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
    latitude: 22.336528795100577,
    longitude: 114.26550841399174,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // const { locationAlways, locationWIU, userCoord, refetch } = useGeolocation();
  const [marker, setMarker] = React.useState({
    latitude: 22.336528795100577,
    longitude: 114.26550841399174,
  });
  useScrollToTop(ref);
  const [end, setEnd] = React.useState<boolean>(false);
  // const { colors } = useTheme();
  const [visible, setVisible] = React.useState(true);
  // const [time, setTime] = React.useState('00 : 23 : 12');
  // const {initialMinute = 0,initialSeconds = 0};
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const[miles,setMiles] = React.useState(0)
  const[carolies,setCarolies] = React.useState(0)
  const[speed,setSpeed] = React.useState(0)
  React.useEffect(() => {
    if(!end){
    let myInterval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 59) {
        if (minutes >= 59) {
          setMinutes(0);
          setHours(hours + 1);
          setSeconds(0);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }
  });

  React.useEffect(()=>{
    if(!end){
      setSeconds(0)
      setMinutes(0)
      setHours(0)
    }else{

      
    }
  },[end]
  )

  // const[miles,setMiles] = React.useState();
  // const[calories,setCarlories] = React.useState()
  return (
    <View>
            <Banner
        visible={visible}
        // contentStyle={{justifyContent:'center',alignSelf:'center'}}
        style={{}}
        actions={[
          {
            label: 'Hide',
            onPress: () => setVisible(false),
          },
          // {
          //   label: 'Learn more',
          //   onPress: () => setVisible(false),
          // },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              // width: size,
              height: size,
            }}
          />
        )}
      >
        <View >
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'black',fontSize:40}}>    </Text>
        {/* <Text style={{fontSize:50,fontWeight:'bold',color:'white'}}> */}
          
                <Text
                  style={{ fontSize: 50, fontWeight: 'bold', color: 'white',marginRight:20 }}
                >
                  {' '}
               {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              
              
              {/* </Text> */}
      </View>
      <View style={{flexDirection:'row'}}>
          <Text style={{color:'black',fontSize:20}}>                               </Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}> Time</Text>
      </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column' , }}>
          {/* <Text style={{color:'black',fontSize:10}}>                                                      </Text> */}
        <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>   {miles}</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>miles</Text>
        {/* <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>0.00</Text> */}
      </View>
      <View style={{flexDirection:'column', }}>
          {/* <Text style={{color:'black',fontSize:1}}></Text> */}
        <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>                     {carolies} </Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>                    calories</Text>
        {/* <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>0.00</Text> */}
      </View>
      <View style={{flexDirection:'column', }}>
          {/* <Text style={{color:'black',fontSize:1}}></Text> */}
        <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>                {speed}</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>            avg speed</Text>
        {/* <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>0.00</Text> */}
      </View>
      </View>
      </Banner>
      <ScrollView
        ref={ref}
        // style={{ backgroundColor: colors.card }}
        contentContainerStyle={styles.content}
        {...rest}
      >
        {/* <View style={styles.container}> */}
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={region}
          zoomEnabled
          rotateEnabled
          minZoomLevel={8}
          maxZoomLevel={20}
          userInterfaceStyle="dark"
          customMapStyle={mapStyle}
          onRegionChangeComplete={(region) => setRegion(region)}
        >
          <Marker
            draggable
            coordinate={marker}
            // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
            // onDragEnd={(marker) => setMarker()}
          />
        </MapView>

        {/* <Text style={styles.text}>Current latitude: {region.latitude}</Text>
    <Text style={styles.text}>Current longitude: {region.longitude}</Text> */}
        {/* </View> */}
      </ScrollView>
      <Button
        mode="contained"
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 500,
          width: 200,
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          setEnd(!end), setVisible(true);
        }}
        icon="run"
        color="purple"
      >
        {end ? 'Run' : 'End'}
      </Button>
    </View>
  );
}
var mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8ec3b9',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1a3646',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#64779e',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#334e87',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'landscape.natural.landcover',
    stylers: [
      {
        weight: 2.5,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#283d6a',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6f9ba5',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3C7680',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#304a7d',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2c6675',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#255763',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#b0d5ce',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#283d6a',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3a4762',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#0e1626',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#4e6d70',
      },
    ],
  },
];

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
    // color:'black'
  },
  calloutView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: 20,
  },
  calloutSearch: {
    borderColor: 'transparent',
    marginLeft: 10,
    width: '90%',
    marginRight: 10,
    height: 40,
    borderWidth: 0.0,
  },
});
