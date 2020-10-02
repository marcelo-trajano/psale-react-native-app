import React, {useEffect} from 'react';
import {Container, Text} from './styles';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};
