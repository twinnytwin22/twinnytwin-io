import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE as string, 
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2023-10-16",
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: "TwinnyTwin.io",
      version: "0.1.0",
    },
  },
);
