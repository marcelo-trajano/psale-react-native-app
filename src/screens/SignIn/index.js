import React from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SighMessageButton,
  SighMessageButtonText,
  SighMessageButtonTextBold,
} from './styles';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SighMessageButton>
        <SighMessageButtonText>
          Ainda nao possui conta?
          <SighMessageButtonTextBold>Cadastre-se</SighMessageButtonTextBold>
        </SighMessageButtonText>
      </SighMessageButton>
    </Container>
  );
};
