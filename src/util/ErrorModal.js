import { Modal } from "antd";
// import { useState } from "react";
const ErrorModal = ({ show, setShow }) => {
  // const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Modal
        title="❗❗❗ Attention "
        centered
        open={show}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
        width={1000}
        okButtonProps={{
          className: "bg-[#605DEC]",
        }}
      >
        <p>Please confirm your email address !!!</p>
      </Modal>
    </>
  );
};
export default ErrorModal;
