import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const MainPageRender = ({data}) => {
  return (
    <View style={styles.container}>
      {/* TopView */}
      <View style={styles.topView}>
        <Image
          source={data.image}
          style={styles.mainImage}
          resizeMode="contain"
        />

        <View style={{justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>{data.header}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.features}>
              <Text style={styles.featuresText}>{data.features.equity}</Text>
            </View>
            <View style={styles.features}>
              <Text style={styles.featuresText}>{data.features.Dmat}</Text>
            </View>
            <View style={styles.features}>
              <Text style={styles.featuresText}>{data.features.pvt}</Text>
            </View>
          </View>
        </View>
        <View style={{margin: 5}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{data.amount}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{data.description}</Text>
      </View>
      {/* centerView */}
      <View style={styles.centerView}>
        <View>
          <Text style={styles.topText}>{data.To_Raised.text}</Text>
          <Text style={styles.bottomText}>{data.To_Raised.amount}</Text>
        </View>
        <View>
          <Text style={styles.topText}>{data.launchdate.text}</Text>
          <Text style={styles.bottomText}>{data.launchdate.Date}</Text>
        </View>
        <View style={{marginTop: -3}}>
          <CircularProgress
            value={data.percentage}
            radius={22}
            progressValueColor={'#4D4F5C'}
            maxValue={100}
            activeStrokeWidth={3}
            inActiveStrokeWidth={3}
            valueSuffix={'%'}
            titleStyle={{fontWeight: 'bold'}}
            inActiveStrokeColor={'#9ea19e'}
            activeStrokeColor={'#e02db4'}
          />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.centerView}>
        <View>
          <Text style={styles.bottomText}>{data.bottomData.amount}</Text>
          <Text style={[styles.topText, {alignSelf: 'center'}]}>Raised</Text>
        </View>
        <View>
          <Text style={styles.bottomText}>{data.bottomData.Equity}</Text>
          <Text style={[styles.topText, {alignSelf: 'center'}]}>Equity</Text>
        </View>
        <View>
          <Text style={styles.bottomText}>{data.bottomData.investor}</Text>
          <Text style={[styles.topText, {alignSelf: 'center'}]}>Equity</Text>
        </View>
      </View>
    </View>
  );
};

export default MainPageRender;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffcfc',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 15,
  },

  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  headerText: {fontSize: 18, fontWeight: 'bold', margin: 5},
  features: {
    backgroundColor: '#e0dada',
    padding: 4,
    margin: 5,
    alignItems: 'center',
    borderRadius: 3,
  },
  featuresText: {
    fontSize: 12,
  },
  description: {marginVertical: 15},
  descriptionText: {fontSize: 14, color: '#707070'},
  centerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  topText: {
    fontSize: 12,
  },
  bottomText: {
    fontSize: 14,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    borderColor: 'grey',
    borderWidth: 0.6,
  },
});
