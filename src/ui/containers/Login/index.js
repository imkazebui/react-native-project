import React, { Component } from 'react'
import { Text } from 'react-native'

import Container from '~/src/ui/components/Container'
import HarmonyBtn from '~/src/ui/components/Button'

export default class extends Component {
  render(){
    return (
      <Container>
        <Text>Container</Text>
        <HarmonyBtn rounded >
          <Text>HarmonyBtn</Text>
        </HarmonyBtn>
      </Container>
    )
  }
}
