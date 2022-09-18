import React from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  View,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Width, Height} from '../utils/Dimensions';
import StartupHScroll from '../component/StartupHScroll';
import {ScrollHData, mainPege} from '../component/Data/Data';
import MainPageRender from '../component/MainPageRender';

const Startup = props => {
  const [Searchinput, setSearchinput] = React.useState('');

  function renderItem({item}) {
    return <MainPageRender data={item} />;
  }

  return (
    <View style={styles.container}>
      {/* searchContainer */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={25} />
        <TextInput
          style={styles.textSearch}
          placeholder="Search"
          onChangeText={item => setSearchinput(item)}
          value={Searchinput}
        />
      </View>

      {/* horizontal item scroll */}
      <StartupHScroll data={ScrollHData} />
      <FlatList
        data={mainPege}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View></View>
    </View>
  );
};

export default Startup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
  },
  searchContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fffefe',
    padding: Platform.OS === 'ios' ? Height / 80 : Height / 130,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSearch: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 8,
  },
});
