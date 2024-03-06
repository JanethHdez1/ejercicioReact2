//rnfes
// si es con assets:
// <Image style={styles.img} source={require("../assets/PNICK.jpeg")} />

import { Icon } from '@rneui/base';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.arriba} />
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={{
            uri: "https://www.etapainfantil.com/wp-content/uploads/2019/06/ninos-felices.jpg",
          }} />
      </View>

      <View style={styles.overlay}>
        <View style={styles.likes}>
          <Text style={{ marginLeft: 5 }}>15</Text>
          <Icon
            type="material-community"
            name="heart"
            size={22}
            color="red"
          />
        </View>
        <View style={styles.icons}>
          <Icon
            type="material-community"
            name="send"
            size={22}
            color="blue"
          />
          <Icon
            type="material-community"
            name="share"
            size={22}
            color="blue"
          />
        </View>
      </View>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  imageContainer: {
    position: 'absolute',
    top: 30,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: 360,
    height: 300,
  },
  overlay: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
