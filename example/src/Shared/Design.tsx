import * as React from 'react';
import { ScrollView, View } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import {
  Button,
  Card,
  Checkbox,
  Paragraph,
  Subheading,
  Switch,
  Text,
  TextInput,
  Title,
} from 'react-native-paper';

type Props = {
  label: string;
  value: boolean;
  onValueChange: () => void;
};

const uris = [
  require('../../assets/design.png'),
  require('../../assets/design2.png'),
  require('../../assets/design3.png'),
  require('../../assets/design4.png'),
  require('../../assets/design5.png'),
  require('../../assets/design6.png'),
  require('../../assets/design7.png'),
  require('../../assets/design8.png'),
  require('../../assets/design9.png'),
];

export default function Design({ label, value, onValueChange }: Props) {
  const [text, setText] = React.useState<string>('');
  const [size, setSize] = React.useState<string>();
  const [color, setColor] = React.useState<string>();
  const [activity, setActivity] = React.useState<string>('');
  const [index, setIndex] = React.useState<number>(0);
  const [male, setMale] = React.useState(false);
  const [female, setFemale] = React.useState(false);
  const [brand,setBrand] = React.useState()
  const [logo,setLogo] = React.useState(false)
  
  return (
    <ScrollView
      style={
        {
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-between',
          // paddingHorizontal: 16,
          // paddingVertical: 12,
        }
      }
    >
      {/* {' '} */}
      <Card>
        <Card.Title
          style={{ padding: 20 }}
          title="Design Your Shoe"
          subtitle="templates"
          // left={LeftContent}
        />
        <Card.Cover source={uris[index]} style={{ height: 350 }} />
        {/* <Card.Actions> */}
        {/* <Text style={{fontSize:20}}>Template  =>> </Text> */}
        <Button
          onPress={() => (index == 8 ? setIndex(0) : setIndex(index + 1))}
          style={{ padding: 10 }}
        >
          Switch
        </Button>

        {/* </Card.Actions> */}
        <Card.Content>
          {/* <Title>Card title</Title> */}
          {/* <Paragraph>Card content</Paragraph> */}
          
      
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              // underlineColorAndroid={'white'}
              // outlineColor='white'
              // style={{width:300}}
              style={{ marginTop: 10, height: 50, width: 180 }}
              label="Name"
              placeholder="name for your shoes"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              // underlineColorAndroid={'white'}
              // outlineColor='white'
              // style={{width:300}}
              style={{ marginTop: 10, height: 50, width: 180, marginLeft: 20 }}
              label="Size"
              placeholder="your size"
              value={size}
              onChangeText={(size) => setSize(size)}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              // underlineColorAndroid={'white'}
              // outlineColor='white'
              style={{ marginTop: 10, height: 50, width: 180 }}
              label="Color"
              placeholder="preferred color"
              value={color}
              onChangeText={(color) => setColor(color)}
            />

            <TextInput
              // underlineColorAndroid={'white'}
              // outlineColor='white'
              style={{ marginTop: 10, height: 50, width: 180, marginLeft: 20 }}
              label="Activity"
              placeholder="preferred activity"
              value={activity}
              onChangeText={(activity) => setActivity(activity)}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              // underlineColorAndroid={'white'}
              // outlineColor='white'
              style={{ marginTop: 10, height: 50, width: 180 }}
              label="Brand"
              placeholder="preferred brand"
              value={brand}
              onChangeText={(brand) => setBrand(brand)}
            />
            <View style={{marginTop:15,flexDirection:'row' , paddingLeft:20}}>
            <Checkbox
            color='gray'
              status={logo ? 'checked' : 'unchecked'}
              onPress={() => {
                setLogo(!logo);
              }}
            />
                       <Text style={{fontSize:20,color:'slategray',paddingTop:3,marginLeft:10}}>Logo</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row',marginTop:10  }}>
            <Checkbox
            color='lightblue'
              status={male ? 'checked' : 'unchecked'}
              onPress={() => {
                setMale(!male);
              }}
            />
            <Text style={{fontSize:20,color:'slategray',paddingTop:4,paddingLeft:10}}>Male</Text>
            <Text>                                </Text>
            <Checkbox
            color='pink'
              status={female ? 'checked' : 'unchecked'}
              onPress={() => {
                setFemale(!female);
              }}
            />
            
            <Text style={{fontSize:20,color:'slategrey',paddingTop:4,paddingLeft:10}}>Female</Text>
          </View>
          
          {/* <Text style={{fontSize:15,paddingTop:20,color:'white',paddingLeft:3}}>gender : </Text> */}
        </Card.Content>
        {/* <Card.Actions> */}
        <Button onPress={()=>console.log()} color='gray' style={{marginTop:10}}>Upload Design Blueprint</Button>
        <View style={{flexDirection:'row',marginTop:20}}>
        <Button style={{ width: 200 }} onPress={() => console.log('haha')}>
          Reset
        </Button>
        <Button style={{ width:200 }} onPress={() => console.log('haha')}>
          Submit
        </Button>
        </View>
        {/* </Card.Actions> */}
      </Card>
      {/* <Subheading>{label}</Subheading> */}
      <Switch value={value} onValueChange={onValueChange} />
    </ScrollView>
  );
}
