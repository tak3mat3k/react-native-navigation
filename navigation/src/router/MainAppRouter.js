import React from 'react'
import { StyleSheet, Button, Image } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { 
  Splash,
  OnBoarding,
  Home,
  ContactUs,
  AboutUs
} from '../components'

const defaultBackButton = (navigation) => {
  return <Button title={"FAk"} onPress={() => { navigation.navigate('DrawerOpen') } } />
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
  initialRouteName: 'Home',
  mode: 'modal'
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
  headerMode: 'none'
})

export { MainAppRouter }
