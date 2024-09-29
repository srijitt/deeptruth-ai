
const express = require("express");
const router = express.Router();

const {
  Sign_up,
  Sign_in,
  userProfile,
  Sign_out,
} = require("../controllers/userController");

const { authMiddleware } = require("../middlewares/authMiddleware");

// Separate routes for admin and user
router.route("/signin").post(Sign_in);
router.route("/signup").post(Sign_up);
router.route("/user/profile").get(authMiddleware(['user']), userProfile); // User-specific profile route
router.route("/admin/profile").get(authMiddleware(['admin']), userProfile); // Admin-specific profile route
router.route("/signout").post(Sign_out);
// Define the Stripe client
// Define the Stripe client
const stripe = require("stripe")("sk_test_51Q4GfVGUiRe4JoDt3kzHZnZYXtci2og6ES9o2beBA0hz0uai6Afkb3gpUCRB2ZqqUZzxMiOvzkOpqFVzPAKpoG0I00rG4UwX0T");

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { name, email, plan, price } = req.body;

    // Define the line item(s) for the checkout session
    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${plan} Plan`,
            description: `Subscription to ${plan} plan`,
          },
          unit_amount: price * 100, // Stripe expects amount in cents
        },
        quantity: 1,
      },
    ];

    // Create the Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:8080/success", // Update to your frontend URL
      cancel_url: "http://localhost:8080/cancel",  // Update to your frontend URL
    });

    // Return the session ID to the client
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});


module.exports = router;
