import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setuserInfo] = useState({
    id: route.params.id,
  });

  useEffect(() => {
    const getInfoProfessional = async () => {
      const token = await AsyncStorage.getItem('token');
      const info = await Api.getProfessional(userInfo.id, token);
      console.log(info);
    };
    getInfoProfessional();
  }, []);

  return (
    <Container>
      <Text>ProfessionalInfo</Text>
    </Container>
  );
};
