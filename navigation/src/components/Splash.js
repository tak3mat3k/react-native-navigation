import React from 'react'
import { NavigationActions } from 'react-navigation'
import { View, Text, StyleSheet } from 'react-native'

class Splash extends React.Component {

  componentDidMount() {
    this.timer = setInterval( () => {
      clearInterval(this.timer)
      setTimeout(() => {
        let onBoarding = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'OnBoarding' })]
        })
        this.props.navigation.dispatch(onBoarding)
      }, 500)
    }, 500)
  }

  render() {
    const { container } = styles 
    return (
      <View style={container}>
        <Text>Splash</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1,
  }
})

export { Splash }
