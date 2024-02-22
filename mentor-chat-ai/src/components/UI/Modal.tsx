import { Modal } from "@mantine/core";
import AuthenticationForm from "../Auth/AuthenticationForm";

type ModalProps = {
  opened: boolean;
  onClose: () => void;
};

const ModalWindow = ({ opened, onClose }: ModalProps) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        transitionProps={{ transition: "fade", duration: 300, timingFunction: "linear" }}
        centered
      >
        <AuthenticationForm />
      </Modal>
    </>
  );
};

export default ModalWindow;
