import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet';
import { Timer } from './styles';


export default class index extends Component {
  keyExtractor = (item, index) => index.toString()

  showActionSheet = () => {
    this.ActionSheet.show();
  }

  renderItem = ({ item }) => (
    <ListItem
      onLongPress={this.showActionSheet}
      title={item.name}
      subtitle={item.fulltime}
      leftAvatar={{ source: { uri: item.avatar_url } }}
    />
  )

  render() {
    const { time, today } = this.props;
    return (
      <View>
        <Timer> {time.fulltime}</Timer>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={today}
          renderItem={this.renderItem}
        />
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title="Qual ação deseja realizar ?"
          options={['Atualizar', 'Remover', 'Fechar']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    );
  }
}
