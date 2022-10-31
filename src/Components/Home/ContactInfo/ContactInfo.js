import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-black p-10 flex flex-row justify-evenly mx-auto w-10/12">
      <div className="text-white">
        <p>We are open Monday-Friday</p>
        <h3 className="text-2xl font-semibold">7:00 am - 9:00 pm</h3>
      </div>
      <div className="text-white">
        <p>Have a question ?</p>
        <h3 className="text-2xl font-semibold">+2546 251 2658</h3>
      </div>
      <div className="text-white">
        <p>Need a repair? our address</p>
        <h3 className="text-2xl font-semibold">Liza Street, New York</h3>
      </div>
    </div>
  );
};

export default ContactInfo;
