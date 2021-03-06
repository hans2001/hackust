import { useScrollToTop, useTheme } from '@react-navigation/native';
import Color from 'color';
import * as React from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Subheading,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = Partial<ScrollViewProps> & {
  date?: number;
};

const Emily = () => {
  return (
    <View style={[styles.row, styles.attribution]}>
      <Avatar.Image source={require('../../assets/avatar-1.png')} size={32} />
      <Subheading style={styles.author}>Emily</Subheading>
    </View>
  );
};

const Author = () => {
  return (
    <View style={[styles.row, styles.attribution]}>
      <Avatar.Image source={require('../../assets/avatar-2.png')} size={32} />
      <Subheading style={styles.author}>Jimmy</Subheading>
    </View>
  );
};

const Sam = () => {
  return (
    <View style={[styles.row, styles.attribution]}>
      <Avatar.Image source={require('../../assets/avatar-2.png')} size={32} />
      <Subheading style={styles.author}>Sam </Subheading>
    </View>
  );
};

export default function NewsFeed(props: Props) {
  const ref = React.useRef<ScrollView>(null);
  const [color, setColor] = React.useState<boolean>(false);
  const [comment, setComment] = React.useState<boolean>(false);
  const [share, setShare] = React.useState<boolean>(false);
  const Footer = () => {
    return (
      <View style={styles.row}>
        <IconButton
          style={styles.icon}
          size={16}
          icon="heart-outline"
          color={color ? 'red' : 'grey'}
          onPress={() => setColor(!color)}
        />
        <IconButton
          style={styles.icon}
          size={16}
          icon="comment-outline"
          color={comment ? 'green' : 'grey'}
          onPress={() => setComment(!comment)}
        />
        <IconButton
          style={styles.icon}
          size={16}
          icon="share-outline"
          color={share ? 'blue' : 'grey'}
          onPress={() => setShare(!share)}
        />
      </View>
    );
  };

  useScrollToTop(ref);
  const wait = (timeout:any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  const { colors } = useTheme();

  return (
    <SafeAreaView>
    <ScrollView
      ref={ref}
      {...props}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Card style={styles.card}>
        <TextInput
          placeholder="What's on your mind?"
          placeholderTextColor={Color(colors.text).alpha(0.5).rgb().string()}
          style={styles.input}
        />
      </Card>

      <Card style={styles.card}>
        <Emily />
        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            just got my fantastic first shoe nfts from this platform which is
            dope , i fking love it , wishing I Can sell it with a great price at
            opensea , you know , I maaa abt ot be a bilionaier , kids!!
          </Text>
        </Card.Content>
        <Image
          source={require('../../assets/shoe1.jpg')}
          style={styles.cover}
        />
        {/* <Text>yo what s up </Text> */}
        {/* <Divider /> */}
        <Footer />

        <Card.Content style={styles.content}>
          <Text style={styles.text}>Hans : Wow , that is nice my man!!</Text>
          <Text style={styles.text}>
            melody : how you got this one , my friend :) ?? @Emily
          </Text>
          <Text style={styles.text}>K : Please don't tell anyone </Text>
        </Card.Content>
        <TextInput
          placeholder="What's your thought?"
          placeholderTextColor={Color(colors.text).alpha(0.5).rgb().string()}
          style={styles.input}
        />
        {/* <Text style={styles.content}>hans: that's nice</Text> */}
      </Card>
      <Card style={styles.card}>
        <Sam />
        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            what your guys thought on the latest coins to invest o , I
            personally bought some doge coins cause it's dope!some one said this
            is scam , i think they are dump
          </Text>
        </Card.Content>
        <Image
          source={require('../../assets/coins.jpg')}
          style={styles.cover}
        />
        <Footer />
        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            awidwbd : price of bitcoin is over the roof now , don't get in the
            market!!
          </Text>
          <Text style={styles.text}>placeholder : no way!! </Text>
        </Card.Content>
        <TextInput
          placeholder="What's your thought?"
          placeholderTextColor={Color(colors.text).alpha(0.5).rgb().string()}
          style={styles.input}
        />
      </Card>
      <Card style={styles.card}>
        <Author />
        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            just designed my first shoe nfts with this platform , it;s dope and
            i ma gonna save it bitches!!!.
          </Text>
        </Card.Content>

        <Image
          source={require('../../assets/shoe3.jpg')}
          style={styles.cover}
        />
        <Divider />
        <Footer />

        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            khabila : Congrats ! This is the newest one from Nike , I 've want
            that for centries @ Nike
          </Text>
          <Text style={styles.text}>
            killingme : no body is gonna told you that you 're dumb!! xd loser{' '}
          </Text>
        </Card.Content>
        <TextInput
          placeholder="What's your thought?"
          placeholderTextColor={Color(colors.text).alpha(0.5).rgb().string()}
          style={styles.input}
        />
      </Card>
      <Card style={styles.card}>
        <Author />
        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            you guys been playing sandbox ?? it's so fun come join me !!
            <Text style={{ color: 'lightblue' }}>
              https://www.sandbox.game/en/
            </Text>
          </Text>
        </Card.Content>
        <Image
          source={require('../../assets/game.jpg')}
          style={{ width: 400, height: 200 }}
        />
        {/* <Divider /> */}
        <Footer />

        <Card.Content style={styles.content}>
          <Text style={styles.text}>
            awdkawd : ahhh I waited this game for a long timeee!!
          </Text>
          <Text style={styles.text}>
            mcgregor : you guys are a joke , I ma punch in the face , fking
            losersss!!{' '}
          </Text>
        </Card.Content>
        <TextInput
          placeholder="What's your thought?"
          placeholderTextColor={Color(colors.text).alpha(0.5).rgb().string()}
          style={styles.input}
        />
      </Card>
      {/* <Card style={styles.card}>
        <Author />
        <Card.Content style={styles.content}>
          <Text>
            Someone broke into my house and stole 20% of my couch. Ouch!
          </Text>
        </Card.Content>
        <Divider />
        <Footer />
      </Card> */}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    margin: 5,
  },
  card: {
    marginVertical: 8,
    borderRadius: 0,
  },
  cover: {
    height: 400,
    borderRadius: 0,
  },
  content: {
    marginBottom: 12,
    // color:'white'
  },
  attribution: {
    margin: 12,
  },
  author: {
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
  },
  msg: {
    // marginBottom: 8,
  },
  text: {
    color: 'white',
  },
});
