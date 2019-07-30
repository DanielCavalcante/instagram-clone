import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableWithoutFeedback as TWF, 
  Alert } 
from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddComment extends Component {

  state = {
    comment: '',
    edit: false
  }

  handleAddCooment = () => {
    Alert.alert('Adicionado', this.state.comment)
  }

  render() {
    let commentArea = null
    if (this.state.edit) {
      commentArea = (
        <View style={styles.container}>
          <TextInput 
            value={this.state.comment} 
            placeholder="Comentário..." 
            style={styles.input} 
            autoFocus={true}
            onChangeText={comment => this.setState({ comment })}
            onSubmitEditing={this.handleAddCooment} />
          <TWF onPress={() => this.setState({ edit: false })}>
            <Icon name="items" size={15} color="#555"></Icon>
          </TWF>
        </View>
      )
    } else {
      commentArea = (
        <TWF onPress={() => this.setState({ edit: true })}>
          <View style={styles.container}>
            <Icon name="comment-o" color="#555" size={25} />
            <Text style={styles.caption}>Add comment</Text>
          </View>
        </TWF>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        {commentArea}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC'
  },
  input: {
    width: '90%'
  }
})

