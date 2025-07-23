import { faContactBook, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Contact() {
  return (
    <div className="p-5 bg-white">
      <h2 className="text-3xl font-bold text-blue-500 mb-8 flex items-center gap-3">
        <FontAwesomeIcon icon={faContactBook} className="h-8 w-8" />
        Contact
      </h2>

      <div className="flex flex-col gap-5 md:gap-8 md:flex-row justify-center">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} className="text-green-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Phone</h5>
            <p className="text-gray-700">+91 7092151614</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Email</h5>
            <p className="text-gray-700">satish25152@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Location</h5>
            <p className="text-gray-700">Madurai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
