import React, {useEffect, useContext} from 'react';
import Api from '../../Api';
import {Container, LoadingIcon} from './styles';
import {UserContext} from '../../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (false) {
        let res = await Api.checkToken(token);

        if (res.token) {
          await AsyncStorage.setItem('token', res.token);
          userDispatch({type: 'setAvatar', payload: {avatar: res.data.avatar}});
          navigation.reset({routes: [{name: 'MainTab'}]});
        } else {
          alert('token invalido!');
          navigation.reset({routes: [{name: 'SignIn'}]});
        }
      } else {
        navigation.reset({routes: [{name: 'SignIn'}]});
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
