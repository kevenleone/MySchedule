import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Overlay, ButtonGroup } from 'react-native-elements';
import RegistryModalContent from '~/components/Registry/Modal';
import Today from '~/components/Registry/Today';
import Week from '~/components/Registry/Week';
import Month from '~/components/Registry/Month';
import Toast from 'react-native-root-toast';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      selectedIndex: 0,
      time: {},
      labelTimes: ['First Mark', 'Outgoing to Lunch', 'Backing to Lunch', 'End Journey'],
      today: [],
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.toggleRegistry = this.toggleRegistry.bind(this);
    this.showTime = this.showTime.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.showTime();
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  handleAdd() {
    const { time: { fulltime }, today, labelTimes } = this.state;
    const name = labelTimes[today.length];
    const registry = {
      name,
      avatar_url: 'https://img.icons8.com/plasticine/64/000000/partly-cloudy-night.png',
      fulltime,
    };

    const newToday = [registry, ...today];
    this.setState({ today: newToday });
    this.toggleRegistry();
    Toast.show('Marcação Incluida com Sucesso!');
  }

  showTime() {
    const { time } = this.state;
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const addZero = tm => (parseInt(tm, 10) < 10 ? '0' : '') + tm;

    time.time = `${hours}:${addZero(minutes)}:${addZero(seconds)}`;
    time.fulltime = `${new Date().toDateString('en-GB')} - ${time.time}`;

    setTimeout(this.showTime, 1000);
    this.setState({ time });
  }

  toggleRegistry() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }

  showContentPeriod() {
    const { selectedIndex, time, today } = this.state;
    switch (selectedIndex) {
      case 0: {
        return <Today today={today} time={time} />;
      }

      case 1: {
        return <Week />;
      }

      case 2: {
        return <Month />;
      }

      default: {
        return <View />;
      }
    }
  }


  render() {
    const { isVisible, selectedIndex, time } = this.state;
    const buttons = ['Today', 'Week', 'Month'];

    return (
      <View>
        <Overlay
          onBackdropPress={this.toggleRegistry}
          height={280}
          isVisible={isVisible}
        >
          <RegistryModalContent time={time} toggle={this.toggleRegistry} handleAdd={this.handleAdd} />
        </Overlay>
        <Header
          centerComponent={{ text: 'Hour Registry', style: { color: '#fff', fontSize: 17 } }}
          rightComponent={{ onPress: this.toggleRegistry, icon: 'add', color: '#fff' }}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
        />
        { this.showContentPeriod() }
      </View>
    );
  }
}
