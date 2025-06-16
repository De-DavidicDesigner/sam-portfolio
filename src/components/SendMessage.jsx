import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SendMessage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_mj5c8ko', 'template_bfsjnku', formRef.current, {
      publicKey: 'qmgsrfZ_iCngP8j-v',
    }).then ((result) => {
      setSuccessMsg('Successful', result);
      setErrorMsg('');
      formRef.current.reset();
    }, (error) => {
      setErrorMsg('Error occured try again', error);
      setSuccessMsg('')
    }).finally(() => setLoading(false));
  }

  return (
    <div className="bg-gray-800 rounded-2xl p-10 text-white flex flex-col gap-5">
      <p className="text-3xl font-bold text-center">
        Contact <span className="text-blue-600">Me!</span>
      </p>
      <form ref={formRef} onSubmit={handleSendEmail} className="flex flex-col gap-5">
        <div className="flex gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-gray-900 p-3 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-gray-900 p-3 rounded w-full"
          />
        </div>
        <div className="flex gap-5">
          {/* <input
            type="number"
            name="message"
            placeholder="Phone Number"
            className="bg-gray-900 p-3 rounded w-full"
          /> */}
          <input
            type="text"
            name="title"
            placeholder="Email Subject"
            className="bg-gray-900 p-3 rounded w-full"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            cols="50"
            className="bg-gray-900 p-3 rounded w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition" disabled={loading}>
          {loading ? 'Sending..' : 'Send Message'}
        </button>

        {successMsg && <p className="text-green-400 text-sm">{successMsg}</p>}
        {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default SendMessage;
