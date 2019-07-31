import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
  
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Xuxinha Souza',
        email: 'xuxinha@mail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'Nena',
            comment: 'Varei'
          },
          {
            nickname: 'Helena',
            comment: '500 é 500'
          }
        ]
      },
      {
        id: Math.random(),
        nickname: 'Nena Silva',
        email: 'nena@mail.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: [
          {
            nickname: 'Xuxinha Souza',
            comment: 'Café'
          },
          {
            nickname: 'Helena',
            comment: 'Lascou'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList 
          data={this.state.posts} 
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} { ...item } />} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})