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
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import SighInput from '../../components/SighInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {};
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
