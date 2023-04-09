import { Modal } from "antd";

import { useState } from "react";
const BookingModal = ({
  show,
  setShow,
  id,
  token,
  flightId,
  username,
  email,
  totalCost,
  noOfSeats,
  duration,
  date,
  arrivaltime,
  departuretime,
  arrivalCity,
  departureCity,
  setSuccessVisible,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const onPayClick = async () => {
    //make a api call for booking
    setConfirmLoading(true);

    try {
      const apicall = await fetch(`${process.env.REACT_APP_BOOKING_API_URL}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify({ flightId, userId: id, noOfSeats }),
      });
      await apicall.json();
      // v2 do something with the data or show booking confirmation
      setSuccessVisible((prev) => !prev);
    } catch (error) {
      //v2 error handling
    } finally {
      setShow(false);
      setConfirmLoading(false);
    }
  };

  return (
    <>
      <Modal
        title="Booking Details"
        // centered
        width={1000}
        open={show}
        onOk={() => onPayClick()}
        onCancel={() => setShow(false)}
        okText="Pay Now"
        confirmLoading={confirmLoading}
        cancelButtonProps={{
          className: " border-gray-200 text-primarypurple",
          type: "ghost",
        }}
        okButtonProps={{
          className: "bg-[#605DEC] text-white hover:bg-[#605DEC] hover:text-white focus:outline-none focus:text-white",
          type: "",
        }}
      >
        <p className="text-xl font-semibold">
          {departureCity} To {arrivalCity}
        </p>
        <hr />
        <div>
          <span>One Way</span>,<span> 1 traveller</span>,<span className="font-semibold"> {date}</span>
        </div>

        <div className="flex items-center m-2 focus-within:out ">
          <div className="text-3xl mr-6">{"✈️"}</div>
          <div className="">
            <p>
              {departureCity} to {arrivalCity}
            </p>
            <p>
              {departuretime} - {arrivaltime}
            </p>
            <p>Direct • {duration} • Economy </p>
          </div>
        </div>
        <hr />
        <div className="m-2">
          <div className="text-xl focus:out ">Travellers Details</div>
          <div className="flex items-center">
            <div className="text-xl after:mr-8">👦</div>
            <div>
              <div>Name : {username}</div>
              <div>Email : {email}</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-2">
          <p className="text-xl">Included baggage</p>
          <p>The total baggage Included in the price</p>
          <div className="flex items-center">
            <span className="text-xl mr-7">{"👜"}</span>
            <div>
              <p>1 cabin pag</p>
              <p>Max weight 7kg</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-8">{"🧳"}</span>
            <div>
              <p>1 checked bag</p>
              <p>Max weight 15kg </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-2">
          <div className="flex justify-between items-center text-xl">
            <p className="">Total({noOfSeats} seats)</p>
            <p>INR ₹ {totalCost}</p>
          </div>
          <p>Includes taxes and charges</p>
        </div>
      </Modal>
    </>
  );
};
export default BookingModal;
