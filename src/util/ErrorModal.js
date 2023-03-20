import { Modal } from "antd";
import ErrorImg from "../assets/error_icon.png";
const ErrorModal = ({ show, setShow, Message }) => {
  return (
    <>
      <Modal
        centered
        open={show}
        footer={false}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
        // width={1000}
        cancelButtonProps={{
          className: "border border-gray-200 text-primarypurple",
          type: "ghost",
        }}
        okButtonProps={{
          className: "bg-[#605DEC] text-white",
          type: "ghost",
        }}
      >
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img src={ErrorImg} alt="erroicon" />
          </div>
          <p>{Message}</p>
        </div>
      </Modal>
    </>
  );
};
export default ErrorModal;
