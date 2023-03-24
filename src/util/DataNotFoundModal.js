import { Modal } from "antd";
import ErrorImg from "../assets/error_icon.png";
const DataNotFoundModal = ({ show, setShow, navigate, Message }) => {
  return (
    <>
      <Modal
        centered
        open={show}
        footer={false}
        onOk={() => {
          setShow(false);
          navigate(-1);
        }}
        onCancel={() => {
          setShow(false);
          navigate(-1);
        }}
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
        <div className="flex flex-col  text-center h-96">
          <div className="flex justify-center">
            <img src={ErrorImg} alt="erroricon" />
          </div>
          <p className="mt-24">No flights are avaiable for this date</p>
        </div>
      </Modal>
    </>
  );
};
export default DataNotFoundModal;
