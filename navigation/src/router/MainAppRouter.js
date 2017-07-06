import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { 
  Splash,
  OnBoarding,
  Home,
  ContactUs,
  AboutUs
} from '../components'

import Icon from 'react-native-vector-icons/EvilIcons'

const defaultBackButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('DrawerOpen') }} >
      <Icon name="navicon" size={30} color="black" />
    </TouchableOpacity>
  ) 
}

const HomeRouter = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      drawerLabel: 'The Home',
      gesturesEnabled: false,
      headerLeft: defaultBackButton(navigation)
    })
  }
})

const AboutUsRouter = StackNavigator({
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({navigation}) => ({
      title: 'AboutUs',
      drawerLabel: 'About',
      gesturesEnabled: false,
      headerLeft: defaultBackButton(navigation)
    })
  }
})

const ContactUsRouter = StackNavigator({
  ContactUs: {
    screen: ContactUs, 
    navigationOptions: ({navigation}) => ({
      title: 'ContactUs',
      drawerLabel: 'Contact',
      gesturesEnabled: false,
      headerLeft: defaultBackButton(navigation)
    })
  }
})

const MyApp = DrawerNavigator({
  Home: { screen: HomeRouter },
  ContactUs: { screen: ContactUsRouter },
  AboutUs: { screen: AboutUsRouter }
},{
  initialRouteName: 'Home'
});

const MainAppRouter = StackNavigator({
  Splash: {
    screen: Splash
  },
  OnBoarding: {
    screen: OnBoarding
  },
  Home: {
    screen: MyApp
  }
}, {
  headerMode: 'none',
  mode: 'modal'
})

export { MainAppRouter }
