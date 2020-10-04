import React, {useState} from 'react';
import styled from 'styled-components/native';
import Stars from '../components/Stars';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;
const UserInfo = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;
const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const ProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export default ({data}) => {
  const navigation = useNavigation();

  return (
    <Area
      onPress={() => {
        navigation.navigate('Profile');
      }}>
      <Avatar source={{uri: data.avatar}} />
      <UserInfo>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />
        <ProfileButton
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <ProfileButtonText>Ver Perfil</ProfileButtonText>
        </ProfileButton>
      </UserInfo>
    </Area>
  );
};
