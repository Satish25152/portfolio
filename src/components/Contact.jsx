import { faContactBook, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Contact() {
  return (
    <div data-aos="fade-left" className="p-5">
      <h2 className="text-3xl font-bold text-teal-300 mb-8 flex items-center gap-3">
        <FontAwesomeIcon icon={faContactBook} className="h-8 w-8" />
        Contact
      </h2>

      <div className="flex flex-col gap-5 md:gap-8 md:flex-row justify-center flex-wrap">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} className="text-green-300 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Phone</h5>
            <p className="">+91 7092151614</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Email</h5>
            <p className="">satish25152@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLocationDot} className="text-red-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Location</h5>
            <p className="">Madurai, India</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">LinkedIn</h5>
            <a
              href="https://www.linkedin.com/in/satish-v-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-700 transition"
            >
              linkedin.com/in/satish-v-profile
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faGithub} className="text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">GitHub</h5>
            <a
              href="https://github.com/satish25152"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              github.com/satish25152
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
