import React from 'react';

const Cancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 w-full max-w-md text-center">
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Cancelled</h2>
        <p className="text-gray-600 mb-6">
          It seems like your payment was not completed. If you need help, please
          contact our support team or try again.
        </p>
        <button
          className="px-6 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-colors"
          onClick={() => window.location.href = "/pricing"} // Redirect to the pricing or retry page
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
};

export default Cancel;
