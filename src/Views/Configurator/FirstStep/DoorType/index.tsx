import React from 'react'
import Modal from '../../../../components/Modal';
import Heading from "./Heading";
import Content from './Content';
import Door from "./Door";
import Preview from './Preview';
import Title from './Title';

type ModalProps = {
  visible: boolean,
  closeModal: (ev: boolean) => void
}

const DoorType: React.FC<ModalProps> = ({visible, closeModal}) => (
  <Modal visible={visible} closeModal={closeModal}>
    <Heading>Door type</Heading>

    <Content>
      <Preview>
        <Title>Single</Title>
        <Door/>
      </Preview>
      <Preview>
        <Title>Double</Title>
        <Door/>
      </Preview>
    </Content>
  </Modal>
)

export default DoorType
