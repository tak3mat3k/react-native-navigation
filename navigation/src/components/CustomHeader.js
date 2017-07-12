import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Animated,
  Easing 
} from 'react-native'

class CustomHeader extends React.Component {

  state = {
    animation: new Animated.Value(150)
  }

  componentDidMount() {
    Animated.spring(
      this.state.animation,
      {
        toValue: 100
      }
    ).start()
  }

  render() {
    const { 
      container,
      bigTitle
     } = styles
    const {
      leftButton
    } = this.props
    return (
      <Animated.View style={[container, { height: this.state.animation, paddingVertical: 10 }]}>
        {leftButton}
        <Text style={bigTitle}>ShakeMe App</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: 150,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  bigTitle: {
    marginLeft: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
})

export { CustomHeader }
