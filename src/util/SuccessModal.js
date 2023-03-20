import { Modal } from "antd";
import SuccessImg from "../assets/CheckMark.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ show, setShow }) => {
  // const [modal2Open, setModal2Open] = useState(false);
  const navigate = useNavigate();
  const handleDone = () => {
    setShow(false);
    navigate("/", { replace: true });
  };
  return (
    <>
      <Modal
        centered
        open={show}
        footer={false}
        closeIcon={"X"}
        // closable={false}
        afterClose={() => handleDone()}
        onOk={() => handleDone()}
        onCancel={() => handleDone()}
        okButtonProps={{
          className: "bg-[#605DEC]",
        }}
        className="flex justify-center"
      >
        <div className="flex justify-center ml-1">
          <img src={SuccessImg} alt="success Icon" />
        </div>
        <div className="mt-5 flex flex-col text-center">
          <p className="text-lg font-bold">You're booked!</p>
          <p>
            Find all your booking in <span className="text-primarypurple cursor-pointer">My Bookings.</span>
          </p>
          <p className="px-2 text-xs mt-2">
            A confirmation mail will be sent to your registerd email with all the details.
          </p>
        </div>
        <div className="flex justify-center my-9">
          <Button
            title={"Done"}
            customStyle={" bg-primarypurple py-2 px-6 shadow-xl text-slate-100 font-bold text-base"}
            onClick={handleDone}
          />
        </div>
      </Modal>
    </>
  );
};
export default SuccessModal;
