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
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import SighInput from '../../components/SighInput';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleCadastar = async () => {
    if (name !== '' && email !== '' && password !== '') {
      let res = await Api.sighUp(name, email, password);
      if (res.token) {
        await AsyncStorage.setItem('token', res.token);
        userDispatch({type: 'setAvatar', payload: {avatar: res.data.avatar}});
        navigation.reset({routes: [{name: 'MainTab'}]});
      } else {
        alert(res.error);
        navigation.reset({routes: [{name: 'SighUp'}]});
      }
    } else {
      alert('Por favor preencha os campos nome, email e senha!');
    }
  };

  const handleLogin = () => {
    navigation.reset({routes: [{name: 'SignIn'}]});
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SighInput
          IconSvg={PersonIcon}
          placeholder="Digite sua nome"
          value={name}
          onChangeText={(t) => setName(t)}></SighInput>
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
        <CustomButton onPress={handleCadastar}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SighMessageButton onPress={handleLogin}>
        <SighMessageButtonText>
          Ja possui uma conta?
          <SighMessageButtonTextBold>Faca login</SighMessageButtonTextBold>
        </SighMessageButtonText>
      </SighMessageButton>
    </Container>
  );
};
