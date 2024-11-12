import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Footer() {
  const { user } = useContext(UserContext);

  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Insightful Bytes</span>
            </p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                {user ? (
                  <Link to="/write" className="hover:underline me-4 md:me-6">Write A Post</Link>
                ) : (
                  <Link to="/login" className="hover:underline me-4 md:me-6">Login</Link>
                )}
              </li>
              <li>
                {user ? (
                  <div>
                    {/* Render additional user-specific links or actions */}
                  </div>
                ) : (
                  <Link to="/register" className="hover:underline me-4 md:me-6">Register</Link>
                )}
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">All Rights Reserved</a> | Created By Karan</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
