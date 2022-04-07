import { FontAwesome } from '@expo/vector-icons';
import { useScrollToTop, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Item = { msg:string , name: string; hashtags: string };

const CONTACTS: Item[] = [
  { msg:"awdwdbn: I told you no one is gonna buy it",name: 'upcoming money nfts from artist monkey king ..', hashtags:"#nfts #web3 #opensea #sales"  },
  { msg:"hanssag: well said, I do expecting it to come out ",name: 'sandbox announce the newest transaction ...', hashtags:"#game #web3 #sandbox #finance"  },
  { msg:"Camile: he 's a joke , don't bother ",name: 'who hates how moralis of being such a bad...', hashtags:"#web3 development #coding "  },
  { msg:"demarrr: this one is extremely valuable in the market I must said",name: 'ape nfts sales', hashtags:"#sales #ape"  },
  { msg:"aaaaandnandw: doge coin is a joke xddd! , you thought Elon is playing with you , I think not",name: 'coin transaction', hashtags:"#crypto #transaction "  },
  { msg:"ddddd: I thought he already mentioned that!!!",name: 'Nikke nft shoes sales', hashtags:"#shoes #web3 #nike "  },
  // { name: '', hashtags:"#dicussion"  },
];

const ContactItem = React.memo(
  ({ item }: { item: {msg:string, name: string; hashtags: string  } }) => {
    const { colors } = useTheme();

    return (
      <View style={[styles.item, { backgroundColor: colors.card }]}>
        <View style={styles.avatar}>
          <Text style={styles.letter}>
            {item.msg.slice(0, 1).toUpperCase()}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
          
          <Text style={{paddingVertical:8,color:'grey'}}>{item.msg}</Text>
          <Text style={[styles.number, { color: 'blue', opacity: 0.8 }]}>
            {item.hashtags}
          </Text>
        </View>
      </View>
    );
  }
);

const ItemSeparator = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.separator, { backgroundColor: colors.border }]} />
  );
};

export default function Contacts() {
  const ref = React.useRef<FlatList<Item>>(null);

  useScrollToTop(ref);

  const renderItem = ({ item }: { item: Item }) => <ContactItem item={item} />;

  return (
    <FlatList
      ref={ref}
      data={CONTACTS}
      keyExtractor={(_, i) => String(i)}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  number: {
    fontSize: 12,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});
