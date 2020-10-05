import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {
  Container,
  LoadingIcon,
  Scroller,
  EmptyHeader,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwipeDot,
  SwipeDotActive,
  SwiperItem,
  SwipperImage,
  UserAvatar,
  UserInfo,
  UserName,
  FavoriteButtom,
} from './styles';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Swipper from 'react-native-swiper';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setuserInfo] = useState({
    id: route.params.id,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInfoProfessional = async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');

      const info = await Api.getProfessional(userInfo.id, token);

      if (info.error === '') {
        setuserInfo(info.data);
      } else {
        alert('error:' + info.error);
      }
      setLoading(false);
    };
    getInfoProfessional();
  }, []);

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swipper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwiperItem key={key} data={item}>
                <SwipperImage source={{uri: item.url}} resizeMode="cover" />
              </SwiperItem>
            ))}
          </Swipper>
        ) : (
          <EmptyHeader></EmptyHeader>
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserName>{userInfo.name}</UserName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <FavoriteButtom>
              <FavoriteIcon
                width="24"
                height="24"
                fill="#ff0000"
                style={{marginTop: -10, marginLeft: 40}}
              />
            </FavoriteButtom>
          </UserInfoArea>
          <ServiceArea></ServiceArea>
          <TestimonialArea></TestimonialArea>
        </PageBody>
      </Scroller>
    </Container>
  );
};
