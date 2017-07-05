import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ContactUs extends React.Component {
  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Text>Contact Us</Text>
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

export { ContactUs }