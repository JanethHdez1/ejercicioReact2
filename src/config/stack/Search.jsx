import { StyleSheet, View, Image, TextInput } from 'react-native';
import React from 'react';
import { Icon } from "@rneui/base";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSearch}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#666"
        />
        <Icon
          type="material-community"
          name="magnify"
          size={22}
          style={{ marginRight: 5 }}
        />
      </View>
      <View style={styles.imgGrid}>
        <View style={styles.imgContainer}>
          <View style={styles.imgBorder}>
            <Image
              style={styles.img}
              source={{
                uri: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beautiful-Bridge-And-Photos.jpg",
              }} />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.imgBorder}>
            <Image
              style={styles.img}
              source={{
                uri: "https://cdn.pixabay.com/photo/2023/02/28/12/56/landscape-7820792_960_720.jpg",
              }} />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.imgBorder}>
            <Image
              style={styles.img}
              source={{
                uri: "https://www.okchicas.com/wp-content/uploads/2015/09/beb%C3%A9s-animales-m%C3%A1s-tiernos-11.jpg",
              }} />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.imgBorder}>
            <Image
              style={styles.img}
              source={{
                uri: "https://i.pinimg.com/736x/b5/71/f5/b571f55e23918f5da1cfe041bae8edae.jpg",
              }} />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.imgBorder}>
            <Image
              style={styles.img}
              source={{
                uri: "https://i1.wp.com/medioambienteynaturaleza.com/wp-content/uploads/2015/08/Animales-tiernos-aj.jpg",
              }} />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.imgBorder}>
            <Image
              style={styles.img}
              source={{
                uri: "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/e/f/ef7b09ac.jpg",
              }} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputSearch: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
  },
  imgGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imgContainer: {
    width: '33%',
    padding: 5,
    aspectRatio: 1, // para hacerlo cuadradito
  },
  imgBorder: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
