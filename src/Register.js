import React from 'react';

function Register() {
  return (
    <div className="w-auto items-center gap-4">
      <a className="block rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 md:flex md:items-center" href="/candidates">
        <span className="hidden md:inline">Stay Informed</span>
        <i className="fas fa-envelope md:hidden"></i>
      </a>
    </div>
  )
}

export default Register;
