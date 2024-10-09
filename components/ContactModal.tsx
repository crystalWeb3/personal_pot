import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";
import MapComponent from "./MapComponent"; // Import the MapComponent
import ChatComponent from "./ChatComponent"; // Import the ChatComponent
import LinkButton from "./LinkButton";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [telegram, setTelegram] = useState("");
  const [status, setStatus] = useState(
    ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      subject,
      message,
      telegram
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_h0ozx2k",
        "template_b8ulzv1",
        templateParams,
        "6sAYABfHlZvON4FgA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setTelegram("");
          setSubject("");
          onClose();
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Error sending message.");
        }
      );
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    const modalContent = document.getElementById("modal-content");
    if (modalContent && !modalContent.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="modal2 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleBackdropClick}
    >
      <div
        id="modal-content"
        className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row"
      >
        <div className="flex-1 pr-4 mb-4 md:mb-0">
          {" "}
          {/* Chat section */}
          <h2 className="text-lg font-medium text-white mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="m-1 w-full sm:w-1/2 lg:w-1/2">
                {/* <label className="block mb-2 text-white">Please Input Your Full Name.</label> */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full Name"
                  className="border border-gray-600 rounded p-3 w-full bg-white text-black"
                />
              </div>
              <div className="m-1 w-full sm:w-1/2 lg:w-1/2">
                {/* <label className="block mb-2 text-white">Email We can contact with you.</label> */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="border border-gray-600 rounded p-3 w-full bg-white text-black"
                />
              </div>
            </div>

            <div className="m-1">
              {/* <label className="block mb-2 text-white">Email We can contact with you.</label> */}
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Subject"
                className="border border-gray-600 rounded p-3 w-full bg-white text-black"
              />
            </div>
            
            <div className="m-1">
              {/* <label className="block mb-2 text-white">Email We can contact with you.</label> */}
              <input
                type="subject"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                required
                placeholder="Telegram"
                className="border border-gray-600 rounded p-3 w-full bg-white text-black"
              />
            </div>
            
            <div className="m-1 ">
              {/* <label className="block mb-2 text-white">Brief Message to Say</label> */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
                className="border border-gray-600 rounded p-3 w-full bg-white text-black"
              />
            </div>

            <div className="mt-5"></div>
            <LinkButton onClick={(e) => handleSubmit(e)} className="w-full">
              Send Message
            </LinkButton>
            <div className="mt-5"></div>
            {status && <p className="mt-2 text-white">{status}</p>}
            {/* <div className="mt-10"></div> */}
          </form>
          {/* <ChatComponent /> Chat component */}
        </div>
        <div className="flex-1">
          {" "}
          {/* Map section */}
          {/* Map component */}
          <div className="mobile-unshow">
          <MapComponent /> 
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
