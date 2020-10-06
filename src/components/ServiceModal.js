import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import ExpandIcon from '../assets/expand.svg';
import NavNextIcon from '../assets/nav_next.svg';
import NavPrevIcon from '../assets/nav_prev.svg';

const Modal = styled.Modal`
  width: 100%;
`;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #83d6e3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 400px;
  padding: 10px 20px 40px 20px;
`;

const ExpandButtom = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
`;

const UserInfo = styled.View`
  margin-top: 15px;
  flex-direction: row;
  background-color: #ffffff;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
`;

const Avatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 12px;
`;

const UserName = styled.Text`
  color: #080000;
  font-size: 21px;
  font-weight: bold;
  margin-left: 12px;
`;

const ServiceInfo = styled.View`
  flex-direction: row;
  padding: 13px;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 12px;
`;
const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
const BookingCalendar = styled.View`
  margin-top: 15px;
  background-color: #ffffff;
  height: 70px;
`;
const BookingHours = styled.View`
  margin-top: 15px;
  background-color: #ffffff;
  height: 30px;
`;
const ConfirmBookingBtn = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: #268596;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  height: 60px;
  justify-content: center;
`;

const ConfirmBookingBtnText = styled.Text`
  color: #ffffff
  font-weight: bold;
  font-size: 17px;
`;

const CalendarHeader = styled.View`
  flex-direction: row;
`;

const PrevBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DateInfoArea = styled.View`
  width: 140px;
  justify-content: center;
  align-items: center;
`;

const DateInfo = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000000;
`;

const NextBtn = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default ({show, setShowModal, userInfo, selectedService}) => {
  const [idProfissional, setIdProfissional] = useState(null);
  const [idServico, setIdServico] = useState(null);
  const [hora, setHora] = useState(0);
  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);

  useEffect(() => {
    const today = new Date();
    setAno(today.getFullYear());
    setMes(today.getMonth());
    setDia(today.getDate());
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNextClick = () => {
    let date = new Date(ano, mes, 1);
    date.setMonth(date.getMonth() + 1);
    setAno(date.getFullYear());
    setMes(date.getMonth());
    setDia(1);
  };
  const handlePrevClick = () => {
    let date = new Date(ano, mes, 1);
    date.setMonth(date.getMonth() - 1);
    setAno(date.getFullYear());
    setMes(date.getMonth());
    setDia(1);
  };

  const confirmBooking = () => {};

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <ExpandButtom onPress={closeModal}>
            <ExpandIcon width="40" height="40" fill="#ffffff"></ExpandIcon>
          </ExpandButtom>
          <UserInfo>
            <Avatar source={{uri: userInfo.avatar}}></Avatar>
            <UserName>{userInfo.name}</UserName>
          </UserInfo>
          <ServiceInfo>
            <Name>{selectedService.name}</Name>
            <Price>R$ {selectedService.price}</Price>
          </ServiceInfo>
          <BookingCalendar>
            <CalendarHeader>
              <PrevBtn onPress={handlePrevClick}>
                <NavPrevIcon width="40" height="40" fill="#000000" />
              </PrevBtn>
              <DateInfoArea>
                <DateInfo>
                  {months[mes]} {ano}
                </DateInfo>
              </DateInfoArea>
              <NextBtn onPress={handleNextClick}>
                <NavNextIcon width="40" height="40" fill="#000000" />
              </NextBtn>
            </CalendarHeader>
          </BookingCalendar>
          <BookingHours></BookingHours>
          <ConfirmBookingBtn onPress={confirmBooking}>
            <ConfirmBookingBtnText>Finalizar Agendamento</ConfirmBookingBtnText>
          </ConfirmBookingBtn>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};
