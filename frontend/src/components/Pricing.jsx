import React from "react";

const Pricing = () => {
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51Q4GfVGUiRe4JoDt253YHSEZ5U9c0hi4qoeRjaTL7zM7NevZhHATV1pnX0UI5aqCgCKmwJ9Sx4es1CP3RO4pk0mF00937eNtvQ")
    const headers = {
      "Content-Type":"Application/json"
    }
    const response = await fetch(`${apiURL}/create-checkout-session`,{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    })

  }
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
          <div className="flex flex-col items-center xl:items-start xl:mx-8">
            <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our Pricing Plan
            </h1>
            <div className="mt-4">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
              Select our Pro Plan for unrestricted access
            </p>
          </div>
          <div className="flex-1 xl:mx-8">
            <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
              {/* Essential Plan */}
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                <div className="p-6">
                  <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                    Basic
                  </h1>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">
                    This is our free community plan for all users
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                    $0.00 <span className="text-base font-medium">/Month</span>
                  </h2>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">
                    What’s included:
                  </h1>
                  <div className="mt-8 space-y-4">
                    {[
                      "Unlimited Image Detection",
                      "10 Audio Detections per month",
                      "Video Detection",
                      "Bulk Image/Audio/Video detection",
                    ].map((feature, index) => (
                      <div className="flex items-center" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-5 h-5 ${
                            index < 4 ? "text-blue-500" : "text-red-400"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d={
                              index < 4
                                ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                : "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            }
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                <div className="p-6">
                  <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                    Pro
                  </h1>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">
                    Subscribe to our pro plan to gain unlimited access.
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                    $10.00 <span className="text-base font-medium">/month</span>
                  </h2>
                  <button onclick = {makePayment} className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                  </button>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">
                    What’s included:
                  </h1>
                  <div className="mt-8 space-y-4">
                    {[
                      "Unlimited Image Detection",
                      "Unlimited Audio Detection",
                      "Unlimited Video Detection",
                      "Bulk Image/Audio/Video Detections",
                    ].map((feature, index) => (
                      <div className="flex items-center" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
