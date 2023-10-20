import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Chuyển đến Screen 1"
      onPress={() => navigation.navigate('Screen1')}
    />
  );
};
export default Screen2;