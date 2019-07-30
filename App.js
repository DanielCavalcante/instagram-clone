import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Xuxinha',
        comment: 'Eixee'
      },
      {
        nickname: 'Nena',
        comment: 'Mai pia'
      },
      {
        nickname: 'Helena mulher',
        comment: 'Que isso Margaret'
      }
    ]
    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    )
  }
}