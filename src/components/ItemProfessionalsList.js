import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Star from '../assets/star.svg';
import {useNavigation} from '@react-navigation/native';

const ProfessionalContainer = styled.View`
  background-color: #fff;
  height: 120px;
  margin-top: 20px;
  padding: 15px;
  flex-direction: row;
  border-radius: 10px;
`;
const ProfessionalAvatar = styled.Image`
  width: 92px;
  height: 92px;
  border-radius: 10px;
`;
const ProfessionalInfo = styled.View`
  margin-left: 30px;
`;
const ProfessionalName = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-top: 7px;
`;
const ProfessionalRate = styled.View`
  flex-direction: row;
`;
const ProfessionalStarsIcon = styled.View`
  flex-direction: row;
`;
const ProfessionalStars = styled.Text`
  margin-left: 15px;
`;
const ProfessionalProfileButton = styled.TouchableOpacity`
  width: 80px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #4eadbe;
  margin-top: 8px;
`;

export default ({data}) => {
  const navigation = useNavigation();

  return (
    <ProfessionalContainer>
      <ProfessionalAvatar source={{uri: data.avatar}} />
      <ProfessionalInfo>
        <ProfessionalName>{data.name}</ProfessionalName>
        <ProfessionalRate>
          <ProfessionalStarsIcon>
            <Star width="20" height="20" fill="#FFFF00" />
            <Star width="20" height="20" fill="#FFFF00" />
            <Star width="20" height="20" fill="#FFFF00" />
          </ProfessionalStarsIcon>
          <ProfessionalStars>{data.stars}</ProfessionalStars>
        </ProfessionalRate>
        <ProfessionalProfileButton
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text>Ver Perfil</Text>
        </ProfessionalProfileButton>
      </ProfessionalInfo>
    </ProfessionalContainer>
  );
};
