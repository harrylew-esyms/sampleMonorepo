import React from 'react';
import { View, Text } from 'react-native';

import Button from '../UI/Button';

const Demo = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <Text>Demo Home Page</Text>
      <Button
        title='Go to another page'
        url='AnotherDemo'
        navigation={navigation}
      />
    </View>
  );
};

export default Demo;
