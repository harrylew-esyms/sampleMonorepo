import React from 'react';
import { Button as NativeButton } from 'react-native';

const Button = (props) => {
  const { title, url, navigation, params = {} } = props;

  return (
    <NativeButton
      title={title}
      onPress={() => navigation.navigate(url, params)}
    />
  );
};

export default Button;
