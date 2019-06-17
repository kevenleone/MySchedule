import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import {
  Timer, ButtonArea, Observation, ButtonClose,
} from './styles';

export default class index extends Component {
  render() {
    const { time, toggle, handleAdd } = this.props;

    return (
      <View>
        <Timer>{time.time}</Timer>
        <Observation> Você bateu ponto agora a pouco, tem certeza que deseja marcar novamente? </Observation>
        <ButtonArea>
          <ButtonClose onPress={toggle} title="Fechar" />
          <Button onPress={handleAdd} title="Salvar Ponto" />
        </ButtonArea>
      </View>
    );
  }
}
