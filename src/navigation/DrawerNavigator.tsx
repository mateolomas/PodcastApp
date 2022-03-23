import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NativeStackNavigator from './NativeStackNavigator';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../screens/CategoriesScreen';
import PopularScreen from '../screens/PopularSreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={NativeStackNavigator}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Categories"
        component={CategoriesScreen}
      />

      <Drawer.Screen
        options={{headerShown: false}}
        name="Popular"
        component={PopularScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      style={styles.drawerColor}>
      {/* Parte del avatar */}
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
            }}
            style={styles.avatar}
          />
          <View>
            <Text
              style={{
                fontWeight: '100',
                fontSize: 30,
                color: 'white',
              }}>
              Hi
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'white',
              }}>
              Mateo Sebastian Lomas
            </Text>
          </View>
        </View>

        {/* Opciones de menú */}
        <View style={styles.menuContainer}>
          <View style={styles.menuBoton}>
            <Icon name="home" color="white" size={20} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuTexto}> Recommended</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuBoton}>
            <Icon name="people-outline" color="white" size={20} />
            <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
              <Text style={styles.menuTexto}>Popular</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuBoton}>
            <Icon name="tv-outline" color="white" size={20} />
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Text style={styles.menuTexto}>Categories</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuBoton}>
            <Icon name="musical-notes-outline" color="white" size={20} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuTexto}>My music</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerColor: {
    backgroundColor: 'rgb(46,0,62)',
  },
  menu: {},
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    right: 40,
    marginVertical: 20,
    borderRadius: 10,
    marginRight: 20,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  menuBoton: {
    padding: 10,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuTexto: {
    fontSize: 20,
    color: 'white',
  },
});

export default DrawerNavigator;
