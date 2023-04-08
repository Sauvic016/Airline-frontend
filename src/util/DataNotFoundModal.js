import { Modal } from "antd";
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
        <div className="bg-white p-6 rounded-lg  text-center">
          <div className="text-3xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2">Oops! No Flights</h2>
          <p className="text-gray-700 mb-4">
            {" "}
            There are no flights avaiable for this date please try again with different date .
          </p>
          <button
            className="bg-primarypurple text-white font-bold py-2 px-4 rounded-md"
            onClick={() => {
              setShow(false);
              navigate(-1);
            }}
          >
            Go back to Home
          </button>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
};
export default DataNotFoundModal;
