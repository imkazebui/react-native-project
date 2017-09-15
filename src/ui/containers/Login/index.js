import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Container from '~/src/ui/components/Container'
import HarmonyBtn from '~/src/ui/components/Button'

export default class extends Component {
  render(){
    return (
      <Container
        style={{
          margin: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            marginTop: 40
          }}
        >
          <Text>Harmony UI Kit</Text>
        </View>
        <View
          style={{
            width: '100%',
          }}
        >
          <HarmonyBtn rounded>LOGIN</HarmonyBtn>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <Text>Not a member yet?</Text>
          <Text>Register</Text>
        </View>
      </Container>
    )
  }
}
