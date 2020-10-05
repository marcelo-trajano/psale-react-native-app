import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const EmptyHeader = styled.View``;

export const PageBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
`;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwipperImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const UserAvatar = styled.Image`
  width: 102px;
  height: 102px;
  border-radius: 12px;
  margin-top: -30px;
  margin-left: 40px;
  border-width: 4px;
  border-color: #ffffff;
`;

export const UserInfo = styled.View`
  margin-left: 40px;
`;

export const UserName = styled.Text``;

export const FavoriteButtom = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 15px;
`;
