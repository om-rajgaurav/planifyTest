import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Height} from '../utils/Dimensions';

const StartupHScroll = ({data}) => {
  console.log(data);
  return (
    <ScrollView horizontal={true}>
      {data.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => alert('hello')}>
            <Text style={styles.text}>{item.item}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default StartupHScroll;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    height: Height / 20,
    backgroundColor: '#fdfafd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    alignSelf: 'center',
  },
});
