import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Startup, Market, Wallet, Discover, Basket} from './src/screens';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from './src/component/CustomHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={BottomDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function BottomDrawer() {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          position: 'absolute',
          bottom: -30,
          backgroundColor: 'red',
        },
        tabBarActiveTintColor: '#e213d8',
        tabBarInactiveTintColor: 'gray',
        header: navigationProps => <CustomHeader {...navigationProps} />,
      }}>
      <Tab.Screen
        name="Startup"
        component={Startup}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="rocket-outline" size={size} color={color} />;
          },
        })}
      />

      <Tab.Screen
        name="Market"
        component={Market}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Entypo name="shop" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={({route}) => ({
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            // You can return any component that you like here!
            <Image
              source={require('./src/images/wallet.png')}
              style={{
                width: 35,
                height: 35,
                tintColor: '#ffffff',
              }}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        })}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={size}
                color={color}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="basket-outline" size={size} color={color} />;
          },
        })}
      />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

export default App;

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -27,
        borderRadius: 40,
        backgroundColor: '#e964ab',
        paddingTop: 5,
      }}
      onPress={onPress}>
      <View style={{height: 55, width: 60, borderRadius: 35}}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
