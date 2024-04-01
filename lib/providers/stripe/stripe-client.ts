import { loadStripe } from "@stripe/stripe-js/pure";

let stripePromise: Promise<any | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE ??
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
        "",
    );
  }

  return stripePromise;
};
 