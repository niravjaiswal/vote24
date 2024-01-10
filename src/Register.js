import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Register() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace with your Sender.net API endpoint and API key
      const response = await axios.post('https://api.sender.net/v2/subscribers', {
        email: email,
        // other necessary data
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTI3MDIxNTI1YjVlZTE5YTc2ZTFkNjZmMjI2OWE2OTUwOWM5Y2UzZDViZjAxMGM5N2FhNjE1MzY1ZGE5NzAzOTlhNTI4MWNhZDY0YmU4YzEiLCJpYXQiOiIxNzA0ODUyMjkzLjg5ODM5NSIsIm5iZiI6IjE3MDQ4NTIyOTMuODk4NDAwIiwiZXhwIjoiNDg1ODQ1MjI5My44OTU5MTYiLCJzdWIiOiI4Mzc1NDAiLCJzY29wZXMiOltdfQ.Q-EBeg-CJxf5tAkMLvyTbDUhhLmCigzVqmU-GpFjBZTvyBT72Aa7JC1g3DXXFfr1G2efDU5FLLcNdvFQLjdH2Q'
        }
      });

      console.log(response.data);
      closeModal();
      // Handle success (show message, etc.)
    } catch (error) {
      console.error('Error adding email to list:', error);
      // Handle error (show error message, etc.)
    }
  };
  return (
    <div className="w-auto items-center gap-4">
      <button className="block rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 md:flex md:items-center" onClick={openModal}>
        <span className="hidden md:inline">Stay Informed</span>
        <i className="fas fa-envelope md:hidden"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Email Subscription Modal"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Subscribe to our email list to stay </h2>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center"> up to date with the election</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9c59] focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-[#ff9c59] text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Subscribe
          </button>
        </form>
        <button
          onClick={closeModal}
          className="mt-4 w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
        >
          No Thanks
        </button>
      </Modal>
    </div>
  )
}

export default Register;
