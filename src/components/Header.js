import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import Icon from '../../assets/imgs/icon.png'

export default class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={Icon} style={styles.image}></Image>
          <Text style={styles.title}>Instagram Clone</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20: 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000'
  }
})