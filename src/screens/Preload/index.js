import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        console.log('access garanted!');
        //navigation.navigate('SighUp');
      } else {
        navigation.navigate('SignIn');
      }
    };

    checkToken();
  }, []);
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  );
};
