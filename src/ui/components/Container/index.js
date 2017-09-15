import React, { Component } from 'react'

import { View } from 'react-native'

export default class extends Component {
  static defaultProps = {
    backgroundColor: '#fff'
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.backgroundColor,
          ...this.props.style,
        }}
      >
        { this.props.children }
      </View>
    )
  }
}
