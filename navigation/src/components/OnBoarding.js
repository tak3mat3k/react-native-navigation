import React from "react"
import { NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

class OnBoarding extends React.Component {

   _onPress() {
    let onHome = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
    })
    this.props.navigation.dispatch(onHome)
  }

  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Text>OnBoarding</Text>
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

export { OnBoarding }
