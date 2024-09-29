import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Define your API URL (local server or deployed URL)
const apiURL = "http://localhost:8080/api/users"; // Replace with your actual backend URL

const stripePromise = loadStripe("pk_test_51Q4GfVGUiRe4JoDt253YHSEZ5U9c0hi4qoeRjaTL7zM7NevZhHATV1pnX0UI5aqCgCKmwJ9Sx4es1CP3RO4pk0mF00937eNtvQ");

const Pricing = () => {
  const makePayment = async () => {
    try {
      // Load Stripe
      const stripe = await stripePromise;

      // Define request body to be sent to the backend
      const body = {
        name: "Test User",  // Replace with dynamic user name if needed
        email: "test@example.com",  // Replace with dynamic user email if needed
        plan: "Pro",  // You can change this dynamically based on the selected plan
        price: 10  // The price for the selected plan
      };

      // Send POST request to create a checkout session
      const response = await fetch(`${apiURL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // Parse the response to get the session ID
      const session = await response.json();

      // Check if the session ID was created successfully
      if (session && session.id) {
        // Redirect to Stripe checkout
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        // Handle any errors returned by Stripe
        if (result.error) {
          console.error("Stripe Checkout error:", result.error.message);
        }
      } else {
        console.error("Failed to create Stripe session.");
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
    }
  };

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
              {/* Basic Plan */}
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
              </div>

              {/* Pro Plan */}
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
                  <button
                    onClick={makePayment}  // Updated onClick to use the function correctly
                    className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  >
                    Start Now
                  </button>
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
