import { useScrollToTop, useTheme } from '@react-navigation/native';
import Color from 'color';
import * as React from 'react';
import {
  Image,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const MESSAGES = [
  'oh mine I dare you not do anything stupid , you should sell it to me , kid!:)) ',
  'ahhh! , my nft just dropped the shit out of price , I cannot imagine why did I bought it',
  'I told you it is not gonna work',
  'who ? send a pic of your nft and We shall see why itis not valuable',
  'those stupid ass people still believe those nft shit  , um ..  pathetic',
  'my god can you believe that , the stupid ass mooncoin just got hugely invested by some tech racoon , oyu guys better watch out   ',
  'I dont know how much this is worth , but I  do know that you must be fool to tell somebody about it',
];

export default function Chat(props: Partial<ScrollViewProps>) {
  const ref = React.useRef<ScrollView>(null);

  useScrollToTop(ref);

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.inverted}
        contentContainerStyle={styles.content}
        {...props}
      >
        {MESSAGES.map((text, i) => {
          const odd = i == 1;
          const avatar = i%2;
          const triple = i%2;
          return (
            <View
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              style={[odd ? styles.odd : styles.even, styles.inverted]}
            >
              <Image
                style={styles.avatar}
                source={
                  avatar
                    ? require('../../assets/avatar-2.png')
                    : require('../../assets/avatar-1.png')
                }
              />
              <View
                style={[
                  styles.bubble,
                  { backgroundColor: odd ? 'lightblue': triple ? 'purple' : colors.card },
                ]}
              >
                <Text style={{ color:   'white'  }}>
                  {text}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
        placeholderTextColor={Color(colors.text).alpha(0.5).rgb().string()}
        placeholder="Write a message"
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inverted: {
    transform: [{ scaleY: -1 }],
  },
  content: {
    padding: 10,
  },
  even: {
    flexDirection: 'row',
  },
  odd: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    marginVertical: 6,
    marginHorizontal: 4,
    height: 30,
    width: 30,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, .16)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  bubble: {
    marginVertical: 8,
    marginHorizontal:12,
    paddingVertical: 8,
    paddingHorizontal:12,
    borderRadius: 10,
  },
  input: {
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
