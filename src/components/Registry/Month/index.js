import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

const index = () => (
  <View>
    <CalendarList
  // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
  // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={0}
      horizontal
  // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={0}
  // Enable or disable scrolling of calendar list
      scrollEnabled
  // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator
      onDayPress={day => alert(day.dateString)}
    />
  </View>
);

export default index;
