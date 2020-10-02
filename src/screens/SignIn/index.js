import React, {useState, useContext} from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SighMessageButton,
  SighMessageButtonText,
  SighMessageButtonTextBold,
} from './styles';
import Api from '../../Api';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import SighInput from '../../components/SighInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      let res = await Api.sighIn(email, password);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);
        userDispatch({type: 'setAvatar', payload: {avatar: res.data.avatar}});
        navigation.reset({routes: [{name: 'MainTab'}]});
      } else {
        alert(res.error);
        navigation.reset({routes: [{name: 'SignIn'}]});
      }
    } else {
      alert('Por favor preencha os campos email and senha!');
    }
  };
  const handleCadastro = () => {
    navigation.reset({routes: [{name: 'SighUp'}]});
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SighInput
          IconSvg={EmailIcon}
          placeholder="Digite sua email"
          value={email}
          onChangeText={(t) => setEmail(t)}></SighInput>
        <SighInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(t) => setPassword(t)}
          password={true}></SighInput>
        <CustomButton onPress={handleLogin}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SighMessageButton onPress={handleCadastro}>
        <SighMessageButtonText>
          Ainda nao possui conta?
          <SighMessageButtonTextBold>Cadastre-se</SighMessageButtonTextBold>
        </SighMessageButtonText>
      </SighMessageButton>
    </Container>
  );
};
