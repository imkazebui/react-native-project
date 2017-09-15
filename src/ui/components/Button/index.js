import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'

import colors from '~/src/constants/color'

const emptyFn = () => {}

export default class HarmonyBtn extends Component {

  static defaultProps = {
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,
    onPress: emptyFn,

  }

  render () {
    const { onPress, backgroundColor, rounded, borderColor, style } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={ e => onPress() }
      >
        <View
          style={{
            backgroundColor,
            alignItems: 'center',
            borderRadius: rounded ? 50 : 0,
            borderColor,
            padding: 10,
            ...style,
          }}
        >
          { this.props.children }
        </View>
      </TouchableOpacity>
    )
  }
}
