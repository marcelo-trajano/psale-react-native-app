import React, {useState, useEffect} from 'react';
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
  BackButtom,
  ServiceTitle,
  ServiceItem,
  ServInfo,
  ServName,
  ServPrice,
  BtnAgendar,
  BtnAgendarText,
  TestimonialItem,
  TestimonialInfo,
  TestimonialName,
  TestimonialBody,
} from './styles';
import Stars from '../../components/Stars';
import Stars from '../../components/ServiceModal';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteIconFull from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Swipper from 'react-native-swiper';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setuserInfo] = useState({
    id: route.params.id,
    name: route.params.name,
    avatar: route.params.avatar,
    stars: route.params.stars,
  });
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getInfoProfessional = async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      let info = await Api.getProfessional(userInfo.id, token);

      if (info.error === '') {
        console.log(info.data.services);
        setuserInfo(info.data);
        setLoading(false);
      } else {
        alert('error:' + info.error);
        navigation.reset({routes: [{name: 'SignIn'}]});
      }
    };
    getInfoProfessional();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const favoriteClick = () => {
    setFavorited(!favorited);
  };

  const bookService = (serviceId) => {
    console.log(serviceId);
  };

  return (
    <Container>
      {loading ? (
        <LoadingIcon size="large" color="#63c2d1" />
      ) : (
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
              <FavoriteButtom onPress={favoriteClick}>
                {favorited ? (
                  <FavoriteIconFull width="24" height="24" fill="#ff0000" />
                ) : (
                  <FavoriteIcon width="24" height="24" fill="#ff0000" />
                )}
              </FavoriteButtom>
            </UserInfoArea>
            {userInfo.services && (
              <ServiceArea>
                <ServiceTitle>Lista de servicos</ServiceTitle>
                {userInfo.services.map((item, key) => (
                  <ServiceItem key={key}>
                    <ServInfo>
                      <ServName>{item.name}</ServName>
                      <ServPrice>R$ {item.price}</ServPrice>
                    </ServInfo>
                    <BtnAgendar
                      onPress={() => {
                        bookService(key);
                      }}>
                      <BtnAgendarText>Agendar</BtnAgendarText>
                    </BtnAgendar>
                  </ServiceItem>
                ))}
              </ServiceArea>
            )}
            {userInfo.testimonials && userInfo.testimonials.length > 0 && (
              <TestimonialArea>
                <Swipper
                  style={{height: 110}}
                  showsPagination={false}
                  showsButtons={true}
                  prevButton={
                    <NavPrevIcon width="35" height="35" fill="#000000" />
                  }
                  nextButton={
                    <NavNextIcon width="35" height="35" fill="#000000" />
                  }>
                  {userInfo.testimonials.map((item, key) => (
                    <TestimonialItem key={key}>
                      <TestimonialInfo>
                        <TestimonialName>{item.name}</TestimonialName>
                        <Stars stars={item.rate} showNumber={false}></Stars>
                      </TestimonialInfo>
                      <TestimonialBody>{item.body}</TestimonialBody>
                    </TestimonialItem>
                  ))}
                </Swipper>
              </TestimonialArea>
            )}
          </PageBody>
        </Scroller>
      )}
      <BackButtom onPress={handleBack}>
        <BackIcon width="44" height="44" fill="#ffffff" />
      </BackButtom>
      <ServiceModal
        show={showModal}
        setShowModal={setShowModal}
        userInfo={userInfo}
        selectedService={selectedService}></ServiceModal>
    </Container>
  );
};
