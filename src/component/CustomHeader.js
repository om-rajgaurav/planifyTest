import React from 'react';
import {StyleSheet, Image, View, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Width, Height} from '../utils/Dimensions';

const CustomHeader = ({color, size, navigation}) => {
  return (
    <View style={styles.container}>
      {/* left */}
      <View style={styles.left}>
        <Ionicons
          name="menu"
          color={color}
          size={33}
          onPress={() => navigation.openDrawer()}
        />
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Planify.png',
          }}
          style={styles.image1}
          resizeMode="contain"
        />
      </View>
      {/* right */}
      <View style={styles.right}>
        <Image
          source={require('../images/baseline-phone-24px.png')}
          style={styles.image}
        />
        <Image source={require('../images/search.png')} style={styles.image} />
        <Image
          source={require('../images/notification.png')}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
          style={styles.image2}
        />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? Height / 20 : Height / 40,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    height: Height / 9.5,
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image1: {
    width: 81,
    height: 27,
    marginLeft: 8,
  },
  image: {
    width: 24,
    height: 24,
    marginHorizontal: 6,
  },
  image2: {
    width: 32,
    height: 32,
    marginHorizontal: 6,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    justifyContent: 'space-evenly',
  },
});
