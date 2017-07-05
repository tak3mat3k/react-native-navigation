import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Home extends React.Component {
  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { Home }
