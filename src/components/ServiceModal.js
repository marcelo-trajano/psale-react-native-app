import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

const Modal = styled.Modal`
  width: 100%;
`;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, O, 9, 0.5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #830653;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
`;

export default ({show, setShowModal, userInfo, selectedService}) => {
  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody></ModalBody>
      </ModalArea>
    </Modal>
  );
};
