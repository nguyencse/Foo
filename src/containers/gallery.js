import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native'

export default class Gallery extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Text>Life cycle</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})
