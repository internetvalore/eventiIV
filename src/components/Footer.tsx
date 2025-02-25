import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-gray-500">
            P.IVA 06767350967
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.iubenda.com/privacy-policy/77132692"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/77132692/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
