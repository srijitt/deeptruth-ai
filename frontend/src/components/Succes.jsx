import React from 'react';

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 w-full max-w-md text-center">
        <div className="text-green-500">
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
              d="M9 12l2 2 4-4m0 6a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your transaction was successfull.
        </p>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-colors"
          onClick={() => window.location.href = "/"} 
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
