import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { Icon } from "@rneui/base";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      uri: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beautiful-Bridge-And-Photos.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2023/02/28/12/56/landscape-7820792_960_720.jpg",
    },
    {
      uri: "https://www.okchicas.com/wp-content/uploads/2015/09/beb%C3%A9s-animales-m%C3%A1s-tiernos-11.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/b5/71/f5/b571f55e23918f5da1cfe041bae8edae.jpg",
    },
    {
      uri: "https://i1.wp.com/medioambienteynaturaleza.com/wp-content/uploads/2015/08/Animales-tiernos-aj.jpg",
    },
    {
      uri: "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/e/f/ef7b09ac.jpg",
    },
  ];

  const handleImagePress = (index) => {
    setSelectedImage(images[index]);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {/* Perfil */}
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.profileImgContainer}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4202/4202834.png",
            }}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Janeth Hernández Victoriano</Text>
          <Text style={styles.profileEmail}>janethhdez@gmail.com</Text>
        </View>
      </View>

      {/* Imágenes */}
      <View style={styles.imgGrid}>
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imgContainer}
            onPress={() => handleImagePress(index)}
          >
            <View style={styles.imgBorder}>
              <Image
                style={styles.img}
                source={img}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal de imagen */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Imagen destacada</Text>
          </View>

          <Image
            style={styles.modalImg}
            source={selectedImage}
          />

          <View style={styles.modalText}>
            <Text style={styles.descriptionText}>Description</Text>
            <Text style={styles.likesText}>15</Text>
            <Icon
              type="material-community"
              name="heart"
              size={22}
              color="red"
              style={{ marginRight: 10 }}
            />
            <Icon
              type="material-community"
              name="send"
              size={22}
              color="blue"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <Icon
              type="material-community"
              name="share"
              size={22}
              color="blue"
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    marginBottom: 20,
    marginLeft: 20,
  },
  profileImgContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    marginLeft: 15,
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
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  modalTitleContainer: {
    alignSelf: 'flex-start',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalImg: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  modalText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  likesText: {
    marginLeft: 5,
  },
  descriptionText: {
    marginLeft: 5,
    marginRight: 5,
  },
});

/*
'flex-start': inicio

'flex-end': final

'center': centro

'space-between': distribuye con espacio entre ellos, pero no en los extremos

'space-around': distribuye con espacio alrededor de ellos

'space-evenly': distribuye con espacio igual alrededor de ellos
*/