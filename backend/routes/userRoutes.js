
const express = require("express");
const router = express.Router();

const {
  Sign_up,
  Sign_in,
  userProfile,
  Sign_out,
} = require("../controllers/userController");

const { authMiddleware } = require("../middlewares/authMiddleware");


router.route("/signin").post(Sign_in);
router.route("/signup").post(Sign_up);
router.route("/user/profile").get(authMiddleware(['user']), userProfile); 
router.route("/admin/profile").get(authMiddleware(['admin']), userProfile); 
router.route("/signout").post(Sign_out);

const stripe = require("stripe")("sk_test_51Q4GfVGUiRe4JoDt3kzHZnZYXtci2og6ES9o2beBA0hz0uai6Afkb3gpUCRB2ZqqUZzxMiOvzkOpqFVzPAKpoG0I00rG4UwX0T");

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { name, email, plan, price } = req.body;

    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${plan} Plan`,
            description: `Subscription to ${plan} plan`,
          },
          unit_amount: price * 100, 
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:8080/success", 
      cancel_url: "http://localhost:8080/cancel", 
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});


module.exports = router;
