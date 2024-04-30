import Stripe from "stripe";

let stripeInstance: Stripe | undefined;

try {
  stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY_LIVE! as string, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2023-10-16",
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: "TwinnyTwin.io",
      version: "0.1.0",
    },
  });
} catch (error) {
  throw new Error("Failed to initialize Stripe. Please check your configuration.");
}

if (!stripeInstance) {
  throw new Error("Stripe instance was not initialized.");
}

export const stripe = stripeInstance;
