import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import colors from '~/src/constants/color'

const emptyFn = () => {}

export default class HarmonyBtn extends Component {

  static defaultProps = {
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,
    color: '#fff',
    onPress: emptyFn,

  }

  render () {
    const { onPress, backgroundColor, rounded, borderColor, style, color } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={ e => onPress() }
      >
        <View
          style={{
            alignItems: 'center',
            borderRadius: rounded ? 50 : 0,
            padding: 10,
            backgroundColor,
            borderColor,
            ...style,
          }}
        >
          <Text style={{ color }}>{ this.props.children }</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
