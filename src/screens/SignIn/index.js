import React, {useState} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import SighInput from '../../components/SighInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    let res = await Api.sighIn(email, password);
    if (res.token) {
      let user = await Api.checkToken(res.token);

      AsyncStorage.setItem('token', user.token);
      navigation.reset({routes: [{name: 'Preload'}]});
    } else {
      alert(res.error);
      navigation.reset({routes: [{name: 'SignIn'}]});
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
