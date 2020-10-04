import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButtom,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
} from './styles';
import ItemProfessionalsList from '../../components/ItemProfessionalsList';
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
  const navigation = useNavigation();
  const [location, setlocation] = useState('');
  const [coords, setcoords] = useState(null);
  const [loading, setloading] = useState(false);
  const [listLocalProfessionals, setListLocalProfessionals] = useState([]);

  const searchClick = () => {
    navigation.navigate('Search');
  };
  const getLocation = async () => {
    setcoords(null);

    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    console.log(result);

    if (result == 'granted') {
      setloading(true);

      Geolocation.getCurrentPosition((info) => {
        //console.log(info);
      });

      let token = await AsyncStorage.getItem('token');

      let listProfessionals = await Api.getLocalProfessionals(token);

      setListLocalProfessionals(listProfessionals.data);

      setloading(false);
    }
  };
  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButtom onPress={searchClick}>
            <SearchIcon width="26" height="26" fill="#fff" />
          </SearchButtom>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Onde voce esta?"
            placeholderTextColor="#fff"
            value={location}
            onChangeText={(t) => {
              setlocation(t);
            }}
          />
          <LocationFinder onPress={getLocation}>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinder>
        </LocationArea>
        {loading ? (
          <LoadingIcon size="large" color="#ffffff" />
        ) : (
          listLocalProfessionals.map((item, key) => [
            <ItemProfessionalsList key={key} data={item} />,
          ])
        )}
      </Scroller>
    </Container>
  );
};
